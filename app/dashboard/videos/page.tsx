import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileVideo, Plus } from "lucide-react"

export default function VideosPage() {
  return (
    <div className="container px-4 py-8 sm:px-6 md:py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">내 동영상</h2>
          <p className="text-muted-foreground">업로드한 모든 동영상을 관리하세요.</p>
        </div>
        <div className="mt-4 flex space-x-4 md:mt-0">
          <Button asChild>
            <Link href="/dashboard/upload">
              <Plus className="mr-2 h-4 w-4" />새 동영상
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-2">
              <FileVideo className="h-10 w-10 text-gray-400" />
            </div>
            <CardTitle className="text-lg">데이터 구조와 알고리즘 기초</CardTitle>
            <CardDescription>처리 완료 • 2시간 전</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <Link href="/dashboard/videos/1">보기</Link>
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                공유
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-2">
              <FileVideo className="h-10 w-10 text-gray-400" />
            </div>
            <CardTitle className="text-lg">웹 개발 입문 강의</CardTitle>
            <CardDescription>처리 완료 • 1일 전</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <Link href="/dashboard/videos/2">보기</Link>
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                공유
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-2">
              <FileVideo className="h-10 w-10 text-gray-400" />
            </div>
            <CardTitle className="text-lg">머신러닝 기초</CardTitle>
            <CardDescription>처리 중 • 3시간 전</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <Link href="/dashboard/videos/3">보기</Link>
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                공유
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-2">
              <FileVideo className="h-10 w-10 text-gray-400" />
            </div>
            <CardTitle className="text-lg">파이썬 프로그래밍</CardTitle>
            <CardDescription>처리 완료 • 3일 전</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <Link href="/dashboard/videos/4">보기</Link>
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                공유
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-2">
              <FileVideo className="h-10 w-10 text-gray-400" />
            </div>
            <CardTitle className="text-lg">자바스크립트 심화</CardTitle>
            <CardDescription>처리 완료 • 1주일 전</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <Link href="/dashboard/videos/5">보기</Link>
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                공유
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
