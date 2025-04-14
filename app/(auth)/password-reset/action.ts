// 'use server'

// import { createActionClient } from '@/app/lib/supabase/server';
// import { cookies } from 'next/headers';

// export async function updatePassword(newPassword: string, accessToken: string) {
//   if (!newPassword || newPassword.length < 8) {
//     return { error: 'パスワードは8文字以上である必要があります' };
//   }

//   // `cookies()` は await で取得
//   const cookieStore = await cookies();

//   // Supabaseクライアントを作成
//   const supabase = createActionClient();

//   if (!accessToken) {
//     return { error: '無効なリセットリンクです。再度パスワードリセットを試してください。' };
//   }

//   // トークンをセッションに変換
//   const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(accessToken);
//   if (exchangeError) {
//     return { error: 'セッションの取得に失敗しました: ' + exchangeError.message };
//   }

//   // セッションを取得
//   const { data: { session }, error: sessionError } = await supabase.auth.getSession();
//   if (sessionError || !session) {
//     return { error: 'セッションが無効です。もう一度パスワードリセットを実行してください。' };
//   }

//   // `updateUser()` を使用してパスワードを更新
//   const { error } = await supabase.auth.updateUser({
//     password: newPassword
//   });

//   if (error) {
//     return { error: 'パスワード更新中にエラーが発生しました: ' + error.message };
//   }

//   return { success: 'パスワードが更新されました。ログイン画面へリダイレクトします。' };
// }
