"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Send, FileText, Search, Clock, Sparkles } from "lucide-react"

export default function ChatPage() {
  const [message, setMessage] = useState("")
  const [chatHistory, setChatHistory] = useState([
    {
      role: "system",
      content: "안녕하세요! 업로드한 모든 강의 내용에 대해 질문해보세요. 어떤 내용이든 검색하고 답변해드립니다.",
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [recentSearches, setRecentSearches] = useState([
    "데이터 구조의 종류는 무엇인가요?",
    "웹 개발에서 프론트엔드와 백엔드의 차이점은?",
    "머신러닝 기초 개념을 설명해주세요",
    "파이썬의 주요 특징은 무엇인가요?",
  ])
  const [suggestedQuestions, setSuggestedQuestions] = useState([
    "자바스크립트의 비동기 처리 방법을 설명해주세요",
    "알고리즘의 시간 복잡도란 무엇인가요?",
    "CSS 플렉스박스와 그리드의 차이점은?",
    "객체지향 프로그래밍의 핵심 원칙은?",
  ])

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chatHistory])

  const handleSendMessage = () => {
    if (!message.trim()) return

    // 사용자 메시지 추가
    setChatHistory([...chatHistory, { role: "user", content: message }])

    // 최근 검색어에 추가
    if (!recentSearches.includes(message)) {
      setRecentSearches([message, ...recentSearches.slice(0, 3)])
    }

    // 메시지 입력창 초기화
    setMessage("")

    // 로딩 상태 시작
    setIsLoading(true)

    // 시스템 응답 시뮬레이션 (실제로는 RAG 기반 API 호출)
    setTimeout(() => {
      setIsLoading(false)

      // 질문에 따라 다른 응답 생성 (실제로는 RAG 시스템이 관련 강의 내용을 검색하여 응답)
      let response = ""
      if (message.toLowerCase().includes("데이터 구조") || message.toLowerCase().includes("알고리즘")) {
        response =
          "데이터 구조와 알고리즘에 관한 질문이군요! '데이터 구조와 알고리즘 기초' 강의에서는 배열, 연결 리스트, 스택, 큐, 트리, 그래프, 해시 테이블 등의 기본 데이터 구조를 다루고 있습니다. 특히 시간 복잡도와 공간 복잡도의 개념을 통해 알고리즘의 효율성을 평가하는 방법을 설명하고 있습니다. 더 구체적인 내용이 필요하시면 질문해주세요!"
      } else if (message.toLowerCase().includes("웹") || message.toLowerCase().includes("개발")) {
        response =
          "'웹 개발 입문 강의'에서는 HTML, CSS, JavaScript의 기초부터 시작하여 프론트엔드와 백엔드 개발의 차이점을 설명합니다. 프론트엔드는 사용자가 직접 보고 상호작용하는 웹사이트의 부분을 개발하는 것이고, 백엔드는 서버, 데이터베이스, API 등 사용자에게 보이지 않는 부분을 개발하는 것입니다. 이 강의에서는 React와 Node.js의 기초적인 사용법도 다루고 있습니다."
      } else if (message.toLowerCase().includes("머신러닝") || message.toLowerCase().includes("ai")) {
        response =
          "'머신러닝 기초' 강의에서는 머신러닝의 핵심 개념인 지도학습, 비지도학습, 강화학습의 차이점을 설명하고 있습니다. 또한 선형 회귀, 로지스틱 회귀, 결정 트리, 신경망 등의 기본 알고리즘을 소개하고 있습니다. 데이터 전처리, 모델 평가, 과적합 방지 등의 실용적인 내용도 다루고 있어 머신러닝 입문자에게 유용한 내용을 제공합니다."
      } else if (message.toLowerCase().includes("파이썬") || message.toLowerCase().includes("python")) {
        response =
          "'파이썬 프로그래밍' 강의에서는 파이썬의 주요 특징인 간결한 문법, 인터프리터 언어, 동적 타이핑, 객체지향 프로그래밍 지원 등을 설명하고 있습니다. 또한 리스트, 튜플, 딕셔너리 등의 자료구조와 함수, 클래스, 모듈 등의 개념을 예제와 함께 다루고 있습니다. 데이터 분석, 웹 개발, 인공지능 등 다양한 분야에서 파이썬이 활용되는 방법도 소개하고 있습니다."
      } else if (message.toLowerCase().includes("자바스크립트") || message.toLowerCase().includes("javascript")) {
        response =
          "'자바스크립트 심화' 강의에서는 클로저, 프로토타입, 비동기 프로그래밍 등 자바스크립트의 고급 개념을 다루고 있습니다. 특히 Promise, async/await를 활용한 비동기 처리 방법과 이벤트 루프의 작동 원리를 상세히 설명하고 있습니다. 또한 모듈 시스템, 객체지향 프로그래밍, 함수형 프로그래밍 등 다양한 패러다임을 자바스크립트로 구현하는 방법도 배울 수 있습니다."
      } else {
        response =
          "죄송합니다. 현재 업로드된 강의 내용 중에서 해당 질문에 대한 정확한 답변을 찾지 못했습니다. 다른 질문을 해보시거나, 더 많은 강의를 업로드하시면 더 다양한 주제에 대해 답변드릴 수 있습니다. 데이터 구조, 웹 개발, 머신러닝, 파이썬, 자바스크립트 관련 질문은 어떨까요?"
      }

      setChatHistory((prev) => [
        ...prev,
        {
          role: "system",
          content: response,
          sources: message.toLowerCase().includes("데이터 구조")
            ? ["데이터 구조와 알고리즘 기초", "알고리즘 성능 분석"]
            : message.toLowerCase().includes("웹")
              ? ["웹 개발 입문 강의"]
              : message.toLowerCase().includes("머신러닝")
                ? ["머신러닝 기초"]
                : message.toLowerCase().includes("파이썬")
                  ? ["파이썬 프로그래밍"]
                  : message.toLowerCase().includes("자바스크립트")
                    ? ["자바스크립트 심화"]
                    : [],
        },
      ])
    }, 1500)
  }

  const handleQuickQuestion = (question) => {
    setMessage(question)
    handleSendMessage()
  }

  return (
    <div className="container px-4 py-8 sm:px-6 md:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col space-y-2 mb-8">
          <h2 className="text-3xl font-bold tracking-tight">대화형 검색</h2>
          <p className="text-muted-foreground">업로드한 모든 강의 내용을 대상으로 질문하고 답변을 받아보세요.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle>강의 내용 검색</CardTitle>
                <CardDescription>질문을 입력하면 관련된 강의 내용을 찾아 답변해드립니다.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 overflow-hidden flex flex-col">
                <div className="flex-1 overflow-y-auto pr-4 space-y-4 mb-4">
                  {chatHistory.map((msg, index) => (
                    <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] rounded-lg px-4 py-2 ${
                          msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        <div>{msg.content}</div>
                        {msg.sources && msg.sources.length > 0 && (
                          <div className="mt-2 text-xs flex flex-wrap gap-1">
                            <span className="text-muted-foreground">출처:</span>
                            {msg.sources.map((source, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {source}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="max-w-[80%] rounded-lg px-4 py-2 bg-muted">
                        <div className="flex items-center space-x-2">
                          <div
                            className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
                            style={{ animationDelay: "0ms" }}
                          ></div>
                          <div
                            className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
                            style={{ animationDelay: "300ms" }}
                          ></div>
                          <div
                            className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
                            style={{ animationDelay: "600ms" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    placeholder="질문을 입력하세요..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        handleSendMessage()
                      }
                    }}
                  />
                  <Button size="icon" onClick={handleSendMessage} disabled={isLoading}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-blue-500" />
                  추천 질문
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {suggestedQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-2 px-3"
                      onClick={() => handleQuickQuestion(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-blue-500" />
                  최근 검색
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {recentSearches.map((search, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-start text-left h-auto py-2 px-3 text-muted-foreground hover:text-foreground"
                      onClick={() => handleQuickQuestion(search)}
                    >
                      <Search className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="truncate">{search}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-blue-500" />
                  검색 대상 강의
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>데이터 구조와 알고리즘 기초</span>
                    <Badge variant="outline">색인 완료</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>웹 개발 입문 강의</span>
                    <Badge variant="outline">색인 완료</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>머신러닝 기초</span>
                    <Badge variant="outline">색인 완료</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>파이썬 프로그래밍</span>
                    <Badge variant="outline">색인 완료</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>자바스크립트 심화</span>
                    <Badge variant="outline">색인 완료</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
