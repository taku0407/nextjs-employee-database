import SignOutButton from "@/components/SignOutButton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
// import { redirect } from 'next/navigation'
// import { createClient } from '@/lib/supabase/server'

export default async function Dashboard() {
  // const supabase = await createClient()

  // const { data, error } = await supabase.auth.getUser()
  // if (error || !data?.user) {
  //   redirect('/login')
  // }

  return (
    <>
      <h2 className="text-2xl font-bold m-10">従業員一覧</h2>
      <SignOutButton />
      {/* <p>こんにちは {data.user.email}</p> */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>名</TableHead>
            <TableHead>姓</TableHead>
            <TableHead>性別</TableHead>
            <TableHead>電話番号</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
