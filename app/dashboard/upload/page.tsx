"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileVideo, Link, Upload } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function UploadPage() {
  const { toast } = useToast()
  const [uploading, setUploading] = useState(false)
  const [videoName, setVideoName] = useState("")
  const [videoUrl, setVideoUrl] = useState("")

  const handleFileUpload = () => {
    if (!videoName) {
      toast({
        title: "동영상 이름을 입력해주세요",
        variant: "destructive",
      })
      return
    }

    setUploading(true)

    // 업로드 시뮬레이션
    setTimeout(() => {
      setUploading(false)
      toast({
        title: "업로드 완료",
        description: "동영상이 성공적으로 업로드되었습니다.",
      })
      // 대시보드로 리다이렉트 (클라이언트 컴포넌트이므로 window.location 사용)
      window.location.href = "/dashboard/videos/1"
    }, 2000)
  }

  const handleUrlUpload = () => {
    if (!videoName || !videoUrl) {
      toast({
        title: "모든 필드를 입력해주세요",
        variant: "destructive",
      })
      return
    }

    setUploading(true)

    // 업로드 시뮬레이션
    setTimeout(() => {
      setUploading(false)
      toast({
        title: "URL 처리 완료",
        description: "동영상 URL이 성공적으로 처리되었습니다.",
      })
      // 대시보드로 리다이렉트
      window.location.href = "/dashboard/videos/1"
    }, 2000)
  }

  return (
    <div className="container px-4 py-8 sm:px-6 md:py-12">
      <div className="mx-auto max-w-2xl">
        <div className="flex flex-col space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">동영상 업로드</h2>
          <p className="text-muted-foreground">요약하고 싶은 강의 동영상을 업로드하거나 URL을 입력하세요.</p>
        </div>

        <div className="mt-8">
          <Tabs defaultValue="file" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="file">파일 업로드</TabsTrigger>
              <TabsTrigger value="url">URL 입력</TabsTrigger>
            </TabsList>
            <TabsContent value="file">
              <Card>
                <CardHeader>
                  <CardTitle>파일 업로드</CardTitle>
                  <CardDescription>컴퓨터에 저장된 동영상 파일을 업로드하세요.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="video-name">동영상 이름</Label>
                    <Input
                      id="video-name"
                      placeholder="예: 데이터 구조와 알고리즘 기초"
                      value={videoName}
                      onChange={(e) => setVideoName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="video-file">동영상 파일</Label>
                    <div className="border-2 border-dashed rounded-lg p-8 text-center">
                      <FileVideo className="mx-auto h-10 w-10 text-muted-foreground" />
                      <div className="mt-4 flex flex-col items-center">
                        <p className="text-sm font-medium">파일을 여기에 끌어다 놓거나</p>
                        <p className="text-xs text-muted-foreground">MP4, AVI, MOV 형식 (최대 2GB)</p>
                        <Button variant="outline" className="mt-4">
                          파일 선택
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={handleFileUpload} disabled={uploading}>
                    {uploading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        업로드 중...
                      </>
                    ) : (
                      <>
                        <Upload className="mr-2 h-4 w-4" />
                        업로드
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="url">
              <Card>
                <CardHeader>
                  <CardTitle>URL 입력</CardTitle>
                  <CardDescription>YouTube, Vimeo 등의 동영상 URL을 입력하세요.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="video-name-url">동영상 이름</Label>
                    <Input
                      id="video-name-url"
                      placeholder="예: 데이터 구조와 알고리즘 기초"
                      value={videoName}
                      onChange={(e) => setVideoName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="video-url">동영상 URL</Label>
                    <Input
                      id="video-url"
                      placeholder="https://www.youtube.com/watch?v=..."
                      value={videoUrl}
                      onChange={(e) => setVideoUrl(e.target.value)}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={handleUrlUpload} disabled={uploading}>
                    {uploading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        처리 중...
                      </>
                    ) : (
                      <>
                        <Link className="mr-2 h-4 w-4" />
                        URL 처리
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
