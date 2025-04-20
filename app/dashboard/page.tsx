import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileVideo, MessageSquare, Upload } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="container space-y-8 px-4 py-8 sm:px-6 md:py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">대시보드</h2>
          <p className="text-muted-foreground">동영상 강의 요약 현황과 최근 활동을 확인하세요.</p>
        </div>
        <div className="mt-4 flex space-x-4 md:mt-0">
          <Button asChild>
            <Link href="/dashboard/upload">
              <Upload className="mr-2 h-4 w-4" />
              동영상 업로드
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">총 동영상</CardTitle>
            <FileVideo className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">총 5개의 동영상이 업로드되었습니다.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">처리 완료</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">4개의 동영상이 처리 완료되었습니다.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Notion 저장</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">3개의 요약이 Notion에 저장되었습니다.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">검색 질문</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">총 24개의 질문이 검색되었습니다.</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>최근 업로드한 동영상</CardTitle>
            <CardDescription>최근에 업로드한 동영상 목록입니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded bg-gray-200 flex items-center justify-center">
                  <FileVideo className="h-6 w-6 text-gray-500" />
                </div>
                <div className="space-y-1">
                  <p className="font-medium">데이터 구조와 알고리즘 기초</p>
                  <p className="text-sm text-muted-foreground">처리 완료 • 2시간 전</p>
                </div>
                <div className="ml-auto">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/dashboard/videos/1">보기</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded bg-gray-200 flex items-center justify-center">
                  <FileVideo className="h-6 w-6 text-gray-500" />
                </div>
                <div className="space-y-1">
                  <p className="font-medium">웹 개발 입문 강의</p>
                  <p className="text-sm text-muted-foreground">처리 완료 • 1일 전</p>
                </div>
                <div className="ml-auto">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/dashboard/videos/2">보기</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded bg-gray-200 flex items-center justify-center">
                  <FileVideo className="h-6 w-6 text-gray-500" />
                </div>
                <div className="space-y-1">
                  <p className="font-medium">머신러닝 기초</p>
                  <p className="text-sm text-muted-foreground">처리 중 • 3시간 전</p>
                </div>
                <div className="ml-auto">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/dashboard/videos/3">보기</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/dashboard/videos">모든 동영상 보기</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>빠른 작업</CardTitle>
            <CardDescription>자주 사용하는 기능에 빠르게 접근하세요.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full justify-start" variant="outline" asChild>
              <Link href="/dashboard/upload">
                <Upload className="mr-2 h-4 w-4" />새 동영상 업로드
              </Link>
            </Button>
            <Button className="w-full justify-start" variant="outline" asChild>
              <Link href="/dashboard/chat">
                <MessageSquare className="mr-2 h-4 w-4" />
                대화형 검색 사용하기
              </Link>
            </Button>
            <Button className="w-full justify-start" variant="outline" asChild>
              <Link href="/dashboard/settings">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="mr-2 h-4 w-4"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                Notion 연동 설정
              </Link>
            </Button>
            <Button className="w-full justify-start" variant="outline" asChild>
              <Link href="/dashboard/videos">
                <FileVideo className="mr-2 h-4 w-4" />내 동영상 관리
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
