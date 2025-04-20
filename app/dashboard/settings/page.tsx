import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  return (
    <div className="container px-4 py-8 sm:px-6 md:py-12">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">설정</h2>
          <p className="text-muted-foreground">계정 및 서비스 설정을 관리하세요.</p>
        </div>

        <div className="mt-8">
          <Tabs defaultValue="notion" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="notion">Notion 연동</TabsTrigger>
              <TabsTrigger value="account">계정 설정</TabsTrigger>
              <TabsTrigger value="preferences">환경 설정</TabsTrigger>
            </TabsList>
            <TabsContent value="notion">
              <Card>
                <CardHeader>
                  <CardTitle>Notion 연동 설정</CardTitle>
                  <CardDescription>
                    Notion API 키를 설정하고 요약 내용을 자동으로 저장할 위치를 지정하세요.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="rounded-lg border p-3 bg-green-50 text-green-700">
                      <p className="text-sm font-medium">Notion 계정 연결됨</p>
                      <p className="text-xs">user@example.com</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notion-api-key">Notion API 키</Label>
                    <Input
                      id="notion-api-key"
                      type="password"
                      placeholder="secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                      defaultValue="secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                    />
                    <p className="text-xs text-muted-foreground">
                      Notion API 키는{" "}
                      <a
                        href="https://www.notion.so/my-integrations"
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Notion 통합 설정
                      </a>
                      에서 확인할 수 있습니다.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notion-database-id">Notion 데이터베이스 ID</Label>
                    <Input
                      id="notion-database-id"
                      placeholder="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                      defaultValue="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                    />
                    <p className="text-xs text-muted-foreground">
                      요약 내용을 저장할 Notion 데이터베이스의 ID를 입력하세요.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="auto-save">자동 저장</Label>
                      <Switch id="auto-save" defaultChecked />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      동영상 처리가 완료되면 자동으로 Notion에 저장합니다.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="ml-auto">저장</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>계정 설정</CardTitle>
                  <CardDescription>계정 정보를 관리하세요.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">이름</Label>
                    <Input id="name" defaultValue="사용자" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">이메일</Label>
                    <Input id="email" type="email" defaultValue="user@example.com" disabled />
                    <p className="text-xs text-muted-foreground">
                      이메일은 Notion 계정과 연동되어 있어 변경할 수 없습니다.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="ml-auto">저장</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="preferences">
              <Card>
                <CardHeader>
                  <CardTitle>환경 설정</CardTitle>
                  <CardDescription>서비스 사용 환경을 설정하세요.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="dark-mode">다크 모드</Label>
                      <Switch id="dark-mode" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-notifications">이메일 알림</Label>
                      <Switch id="email-notifications" defaultChecked />
                    </div>
                    <p className="text-xs text-muted-foreground">동영상 처리 완료 시 이메일 알림을 받습니다.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="auto-transcribe">자동 텍스트 변환</Label>
                      <Switch id="auto-transcribe" defaultChecked />
                    </div>
                    <p className="text-xs text-muted-foreground">동영상 업로드 시 자동으로 텍스트 변환을 시작합니다.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="auto-summarize">자동 요약</Label>
                      <Switch id="auto-summarize" defaultChecked />
                    </div>
                    <p className="text-xs text-muted-foreground">텍스트 변환 완료 후 자동으로 요약을 생성합니다.</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="ml-auto">저장</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
