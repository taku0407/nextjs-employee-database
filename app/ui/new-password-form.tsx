"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase/supabase";
import { useRouter, useSearchParams } from "next/navigation";

export default function NewPasswordPage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // パスワードリセットのコードを確認
    const code = searchParams.get('code');
    if (code) {
      verifyPasswordResetCode(code);
    }
  }, [searchParams]);

  const verifyPasswordResetCode = async (code: string) => {
    try {
      const { data: _, error } = await supabase.auth.exchangeCodeForSession(code);
      
      if (error) {
        setMessage("無効または期限切れのリセットコードです。");
        console.error(error);
      }
    } catch (error) {
      setMessage("パスワードリセットの検証中にエラーが発生しました。");
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // パスワードの検証
    if (newPassword !== confirmPassword) {
      setMessage("パスワードが一致しません。");
      return;
    }

    // パスワードの長さの検証
    if (newPassword.length < 8) {
      setMessage("パスワードは8文字以上である必要があります。");
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword });

      if (error) {
        setMessage("パスワードの更新に失敗しました。");
        console.error(error);
      } else {
        setMessage("パスワードが正常に更新されました。");
        // 3秒後にログインページにリダイレクト
        setTimeout(() => {
          router.push("/login");
        }, 3000);
      }
    } catch (error) {
      setMessage("予期せぬエラーが発生しました。");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-sm w-full p-4">
        <h2 className="text-2xl font-semibold mb-4">新しいパスワードの設定</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-sm font-medium mb-2">
              新しいパスワード
            </label>
            <Input
              id="newPassword"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="新しいパスワードを入力"
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
              パスワード（確認）
            </label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="パスワードを再入力"
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-500 mt-4 hover:cursor-pointer hover:bg-blue-400 font-medium"
          >
            パスワードを更新
          </Button>

          {message && <p className="text-center mt-4">{message}</p>}
        </form>
      </div>
    </div>
  );
}