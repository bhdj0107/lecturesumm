"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, FileText, Share2 } from "lucide-react"

export default function VideoDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="container px-4 py-8 sm:px-6 md:py-12">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/dashboard/videos">
            <ArrowLeft className="mr-2 h-4 w-4" />
            돌아가기
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">데이터 구조와 알고리즘 기초</h1>
            <p className="text-muted-foreground mt-2">업로드: 2시간 전 • 처리 완료</p>
          </div>

          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <FileText className="h-16 w-16 text-gray-400 mx-auto" />
              <p className="mt-2 text-sm text-gray-500">동영상 미리보기</p>
            </div>
          </div>

          <Tabs defaultValue="summary">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="summary">요약</TabsTrigger>
              <TabsTrigger value="transcript">전체 텍스트</TabsTrigger>
            </TabsList>
            <TabsContent value="summary" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>강의 요약</CardTitle>
                  <CardDescription>AI가 생성한 강의 요약입니다.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">주요 내용</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>데이터 구조의 기본 개념과 중요성</li>
                      <li>배열과 연결 리스트의 차이점과 활용 사례</li>
                      <li>스택과 큐의 구현 방법 및 응용</li>
                      <li>트리와 그래프 구조의 이해</li>
                      <li>해시 테이블의 작동 원리와 충돌 해결 방법</li>
                    </ul>

                    <h3 className="font-semibold text-lg">핵심 개념</h3>
                    <p>
                      이 강의에서는 데이터 구조의 기본 개념부터 시작하여 다양한 데이터 구조의 특징과 활용 방법을
                      설명합니다. 특히 시간 복잡도와 공간 복잡도의 개념을 통해 알고리즘의 효율성을 평가하는 방법을
                      배웁니다. 실제 프로그래밍에서 어떤 데이터 구조를 선택해야 하는지에 대한 가이드라인도 제공합니다.
                    </p>

                    <h3 className="font-semibold text-lg">결론</h3>
                    <p>
                      적절한 데이터 구조의 선택은 알고리즘의 효율성과 직결되며, 문제 해결 능력을 향상시키는 핵심
                      요소입니다. 이 강의를 통해 기본적인 데이터 구조의 개념과 활용법을 익히고, 실제 프로그래밍에 적용할
                      수 있는 능력을 기를 수 있습니다.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button variant="outline" className="mr-2">
                  <Share2 className="mr-2 h-4 w-4" />
                  공유
                </Button>
                <Button>Notion에 저장</Button>
              </div>
            </TabsContent>

            <TabsContent value="transcript">
              <Card>
                <CardHeader>
                  <CardTitle>전체 텍스트</CardTitle>
                  <CardDescription>동영상에서 추출한 전체 텍스트입니다.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                    <p>안녕하세요, 오늘은 데이터 구조와 알고리즘의 기초에 대해 알아보겠습니다.</p>

                    <p>
                      먼저 데이터 구조란 무엇일까요? 데이터 구조는 데이터를 효율적으로 저장하고 조작하기 위한
                      방법입니다. 적절한 데이터 구조를 선택하는 것은 알고리즘의 효율성과 직결됩니다.
                    </p>

                    <p>
                      가장 기본적인 데이터 구조로는 배열과 연결 리스트가 있습니다. 배열은 메모리에 연속적으로 저장되어
                      인덱스를 통한 빠른 접근이 가능하지만, 크기가 고정되어 있다는 단점이 있습니다. 반면 연결 리스트는
                      동적으로 크기를 조절할 수 있지만, 특정 요소에 접근하기 위해서는 처음부터 순차적으로 탐색해야
                      합니다.
                    </p>

                    <p>
                      스택과 큐는 데이터의 삽입과 삭제가 제한된 형태의 데이터 구조입니다. 스택은 Last In First Out(LIFO)
                      방식으로, 가장 최근에 추가된 항목이 가장 먼저 제거됩니다. 큐는 First In First Out(FIFO) 방식으로,
                      가장 먼저 추가된 항목이 가장 먼저 제거됩니다.
                    </p>

                    <p>
                      트리는 계층적 구조를 표현하는 데 유용한 데이터 구조입니다. 이진 트리, 이진 검색 트리, AVL 트리,
                      레드-블랙 트리 등 다양한 종류가 있으며, 각각 특정 상황에 최적화되어 있습니다.
                    </p>

                    <p>
                      그래프는 노드와 엣지로 구성된 데이터 구조로, 네트워크 구조를 표현하는 데 적합합니다. 방향 그래프와
                      무방향 그래프, 가중치 그래프 등 다양한 형태가 있습니다.
                    </p>

                    <p>
                      해시 테이블은 키-값 쌍을 저장하는 데이터 구조로, 평균적으로 O(1)의 시간 복잡도로 검색, 삽입,
                      삭제가 가능합니다. 하지만 해시 충돌이 발생할 수 있으며, 이를 해결하기 위한 다양한 방법이 있습니다.
                    </p>

                    <p>
                      알고리즘의 효율성을 평가하는 데 중요한 개념이 시간 복잡도와 공간 복잡도입니다. 시간 복잡도는
                      알고리즘이 실행되는 데 걸리는 시간을, 공간 복잡도는 알고리즘이 사용하는 메모리 양을 나타냅니다.
                      이를 표현하는 데 빅오 표기법(Big O notation)이 주로 사용됩니다.
                    </p>

                    <p>
                      실제 프로그래밍에서는 문제의 특성과 요구사항에 따라 적절한 데이터 구조를 선택해야 합니다. 예를
                      들어, 빠른 검색이 필요하다면 해시 테이블이나 이진 검색 트리를, 데이터의 순서가 중요하다면 배열이나
                      연결 리스트를 고려할 수 있습니다.
                    </p>

                    <p>
                      이상으로 데이터 구조와 알고리즘의 기초에 대한 강의를 마치겠습니다. 다음 시간에는 각 데이터 구조의
                      구현 방법과 실제 활용 사례에 대해 더 자세히 알아보겠습니다. 감사합니다.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notion 연동</CardTitle>
              <CardDescription>요약 내용을 Notion에 저장하세요.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-3 bg-muted/50">
                  <p className="text-sm">
                    Notion 연동 상태: <span className="text-green-500 font-medium">연결됨</span>
                  </p>
                </div>
                <Button className="w-full">Notion에 저장</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>동영상 정보</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">업로드 날짜</span>
                  <span>2025년 4월 20일</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">동영상 길이</span>
                  <span>45분 32초</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">처리 상태</span>
                  <span className="text-green-500">완료</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Notion 저장</span>
                  <span>아니오</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>관련 동영상</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded bg-gray-200 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-gray-500" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">알고리즘 성능 분석</p>
                    <p className="text-muted-foreground">3일 전</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded bg-gray-200 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-gray-500" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">고급 자료구조</p>
                    <p className="text-muted-foreground">1주일 전</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded bg-gray-200 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-gray-500" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">정렬 알고리즘</p>
                    <p className="text-muted-foreground">2주일 전</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
