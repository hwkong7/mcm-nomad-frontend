import { describe, expect, it, vi, beforeEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

const { get } = vi.hoisted(() => ({ get: vi.fn() }));

vi.mock("@/api/endpoints", () => ({
  journeyApi: { get },
  airportApi: {}, cartApi: {}, careApi: {}, couponApi: {}, flightApi: {},
  healthApi: {}, membersApi: {}, milesApi: {}, orderApi: {}, storeApi: {}, styleApi: {},
}));

import { useJourney } from "@/hooks/queries";
import { useJourneyStore } from "@/store/journeyStore";

function wrapper({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

describe("useJourney / 무효해진 여정 ID 복구", () => {
  beforeEach(() => {
    get.mockReset();
    useJourneyStore.getState().reset();
  });

  it("조회에 성공하면 저장된 journeyId를 유지한다", async () => {
    get.mockResolvedValue({ data: { journeyId: "J-1" } });
    useJourneyStore.getState().setJourneyId("J-1");

    const { result } = renderHook(() => useJourney("J-1"), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(useJourneyStore.getState().journeyId).toBe("J-1");
  });

  it("조회에 실패하면 journeyId를 비워 탑승권 스캔 화면으로 되돌린다", async () => {
    // 백엔드 테스트 데이터가 리셋되면 로컬에 남은 ID가 없는 여정을 가리킨다.
    get.mockRejectedValue({ status: 404, message: "여정을 찾을 수 없습니다." });
    useJourneyStore.getState().setJourneyId("J-STALE");

    const { result } = renderHook(() => useJourney("J-STALE"), { wrapper });

    await waitFor(() => expect(result.current.isError).toBe(true));
    // journeyId가 비면 화면은 빈 스켈레톤 대신 "탑승권 스캔" 안내로 돌아간다.
    await waitFor(() => expect(useJourneyStore.getState().journeyId).toBeNull());
  });

  it("journeyId가 없으면 조회를 보내지 않는다", () => {
    renderHook(() => useJourney(null), { wrapper });

    expect(get).not.toHaveBeenCalled();
  });
});
