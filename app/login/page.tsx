import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                <Sparkles className="h-6 w-6 text-blue-500" />
                <span>LectureSumm</span>
              </div>
            </div>
            <CardTitle className="text-2xl">로그인</CardTitle>
            <CardDescription>Notion 계정으로 간편하게 로그인하세요.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Button className="w-full flex items-center justify-center gap-2" asChild>
                <Link href="/dashboard">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M4 6h16M4 12h16M4 18h12" />
                  </svg>
                  Notion으로 계속하기
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">또는</span>
              </div>
            </div>
            <div className="space-y-2">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard">데모 계정으로 둘러보기</Link>
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <p className="text-xs text-center text-gray-500">
              계속 진행하면 LectureSumm의{" "}
              <Link href="#" className="underline underline-offset-2">
                이용약관
              </Link>
              과{" "}
              <Link href="#" className="underline underline-offset-2">
                개인정보처리방침
              </Link>
              에 동의하게 됩니다.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
