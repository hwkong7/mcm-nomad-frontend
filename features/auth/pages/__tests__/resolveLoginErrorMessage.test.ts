import { describe, expect, it } from "vitest";
import type { ApiError } from "@/api/client";
import { resolveLoginErrorMessage } from "../LoginPage";

describe("resolveLoginErrorMessage", () => {
  it("에러가 없으면 빈 문자열을 반환해 안내 문구를 숨긴다", () => {
    expect(resolveLoginErrorMessage(null)).toBe("");
  });

  it("status가 없으면(네트워크·타임아웃) 재시도를 안내한다", () => {
    // 인터셉터는 응답을 받지 못하면 status를 null로 채운다.
    const error: ApiError = { status: null, message: "timeout of 60000ms exceeded" };

    const message = resolveLoginErrorMessage(error);

    expect(message).toBe(
      "일시적인 오류로 로그인에 실패했습니다. 잠시 후 다시 시도해주세요."
    );
    // 원인이 네트워크인데 입력이 틀렸다고 읽히면 안 된다.
    expect(message).toContain("잠시 후 다시 시도");
  });

  it("서버가 응답했으면 서버가 내려준 사유를 그대로 보여준다", () => {
    const error: ApiError = { status: 401, message: "비밀번호가 올바르지 않습니다." };

    expect(resolveLoginErrorMessage(error)).toBe("비밀번호가 올바르지 않습니다.");
  });

  it("서버가 응답했지만 메시지가 비어 있으면 기본 문구로 대체한다", () => {
    const error: ApiError = { status: 500, message: "" };

    expect(resolveLoginErrorMessage(error)).toBe("로그인에 실패했습니다.");
  });

  it("네트워크 오류와 인증 실패는 서로 다른 문구로 구분된다", () => {
    const network = resolveLoginErrorMessage({ status: null, message: "Network Error" });
    const unauthorized = resolveLoginErrorMessage({ status: 401, message: "Network Error" });

    expect(network).not.toBe(unauthorized);
  });
});
