import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, FileVideo, MessageSquare, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Sparkles className="h-6 w-6 text-blue-500" />
            <span>LectureSumm</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              기능
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              사용 방법
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              가격
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">로그인</Button>
            </Link>
            <Link href="/login">
              <Button>시작하기</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  동영상 강의를 스마트하게 요약하고 관리하세요
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  AI 기술로 동영상 강의를 자동으로 텍스트로 변환하고 핵심 내용을 요약하여 Notion에 저장합니다.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/login">
                  <Button size="lg" className="gap-1">
                    무료로 시작하기
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#how-it-works">
                  <Button size="lg" variant="outline">
                    사용 방법 알아보기
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">주요 기능</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  LectureSumm이 제공하는 강력한 기능들을 살펴보세요.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-blue-100 p-3">
                  <FileVideo className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold">동영상 변환</h3>
                <p className="text-sm text-gray-500 text-center">
                  동영상 강의를 업로드하면 자동으로 텍스트로 변환합니다.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-blue-100 p-3">
                  <Sparkles className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold">AI 요약</h3>
                <p className="text-sm text-gray-500 text-center">AI가 강의 내용을 분석하여 핵심 내용을 요약합니다.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-blue-100 p-3">
                  <BookOpen className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold">Notion 연동</h3>
                <p className="text-sm text-gray-500 text-center">요약된 내용을 Notion 페이지에 자동으로 저장합니다.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-blue-100 p-3">
                  <MessageSquare className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold">대화형 검색</h3>
                <p className="text-sm text-gray-500 text-center">
                  대화형 인터페이스로 강의 내용을 쉽게 검색하고 질문할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">사용 방법</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  간단한 4단계로 LectureSumm을 시작하세요.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-8">
              <div className="relative flex flex-col items-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white">1</div>
                <h3 className="text-xl font-bold">Notion으로 가입</h3>
                <p className="text-sm text-gray-500 text-center">Notion 계정으로 간편하게 가입하세요.</p>
                {/* 연결선 */}
                <div className="absolute top-6 left-full w-full h-0.5 bg-blue-200 hidden lg:block" />
              </div>
              <div className="relative flex flex-col items-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white">2</div>
                <h3 className="text-xl font-bold">동영상 업로드</h3>
                <p className="text-sm text-gray-500 text-center">요약하고 싶은 강의 동영상을 업로드하세요.</p>
                {/* 연결선 */}
                <div className="absolute top-6 left-full w-full h-0.5 bg-blue-200 hidden lg:block" />
              </div>
              <div className="relative flex flex-col items-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white">3</div>
                <h3 className="text-xl font-bold">AI 요약 확인</h3>
                <p className="text-sm text-gray-500 text-center">AI가 생성한 텍스트와 요약 내용을 확인하세요.</p>
                {/* 연결선 */}
                <div className="absolute top-6 left-full w-full h-0.5 bg-blue-200 hidden lg:block" />
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white">4</div>
                <h3 className="text-xl font-bold">Notion에 저장</h3>
                <p className="text-sm text-gray-500 text-center">요약된 내용을 Notion 페이지에 자동으로 저장하세요.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12 px-4 md:px-6">
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="flex items-center gap-2 font-bold">
              <Sparkles className="h-5 w-5 text-blue-500" />
              <span>LectureSumm</span>
            </div>
            <p className="text-sm text-gray-500">© 2025 LectureSumm. All rights reserved.</p>
          </div>
          <div className="ml-auto flex flex-col gap-2 md:flex-row md:gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">제품</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-gray-500 hover:underline">
                  기능
                </Link>
                <Link href="#" className="text-sm text-gray-500 hover:underline">
                  가격
                </Link>
                <Link href="#" className="text-sm text-gray-500 hover:underline">
                  FAQ
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">회사</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-gray-500 hover:underline">
                  소개
                </Link>
                <Link href="#" className="text-sm text-gray-500 hover:underline">
                  블로그
                </Link>
                <Link href="#" className="text-sm text-gray-500 hover:underline">
                  연락처
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">법적 정보</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-gray-500 hover:underline">
                  이용약관
                </Link>
                <Link href="#" className="text-sm text-gray-500 hover:underline">
                  개인정보처리방침
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
