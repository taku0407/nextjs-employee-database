"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

export default function PasswordResetForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/new-password`,
    });

    if (error) {
      setMessage("リセットに失敗しました。メールアドレスをご確認ください。");
      console.error(error);
    } else {
      setMessage("リセットリンクを送信しました。メールを確認してください。");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-sm w-full p-4">
        <h2 className="text-2xl font-semibold mb-4">パスワードリセット</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              E-mail
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="登録しているメールアドレスを入力してください。"
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-500 mt-4 hover:cursor-pointer hover:bg-blue-400 font-medium"
          >
            リセットリンクを送信
          </Button>

          {message && <p className="text-center mt-4">{message}</p>}
        </form>
      </div>
    </div>
  );
}
