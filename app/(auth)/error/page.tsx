'use client'

import Link from "next/link"

export default function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen text-center">
      <div>
      <h1 className="text-2xl font-semibold">問題が発生しました</h1>
      <Link
        className="block mt-4 text-gray-500 hover:text-gray-700 hover:underline transition-colors duration-200"
        href="/login">ログインに戻る
      </Link>
      </div>
    </div>
  )
}