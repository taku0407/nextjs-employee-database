import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signup } from '../actions/auth'

export default function SignUpForm() {

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-sm w-full p-4">
        <h2 className="text-2xl font-semibold mb-4">従業員データベース</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              E-mail
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="メールアドレスを入力してください。"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              パスワード
            </label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="パスワードを入力してください。"
              required
            />
          </div>
          <Button
            formAction={signup}
            className="w-full mt-2 hover:cursor-pointer"
          >
            メールアドレスに登録フォーム送信
          </Button>
        </form>
        <Link
          className="block mt-4 text-sm text-gray-500 hover:text-gray-700 hover:underline transition-colors duration-200"
          href="/login"
        >
          ログインはこちら
        </Link>
      </div>
    </div>
  );
}
