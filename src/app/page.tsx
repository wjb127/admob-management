'use client';

import { ExternalLink, Clock, Brain, Smartphone, Mail, Phone, Globe, Download } from 'lucide-react';

export default function GawolPortfolio() {
  const apps = [
    {
      id: 'life-timer',
      name: 'Life Timer - Life Calculator',
      subtitle: '남은 수명 계산기',
      description: '통계 데이터를 기반으로 남은 생명 시간을 계산하여 매일 시간의 소중한 가치를 깨닫게 도와주는 동기부여 앱입니다.',
      icon: '⏰',
      status: '출시됨',
      statusColor: 'bg-green-100 text-green-800',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.deathclock.lifetimerapp&pli=1',
      features: [
        '생년월일 기반 남은 시간 계산',
        '년, 월, 일, 시, 분, 초 실시간 업데이트',
        '공식 기대수명 통계 데이터 활용',
        '매일 동기부여 명언 제공',
        '다국어 지원'
      ],
      screenshots: [
        '/screenshots/life-timer-1.jpg',
        '/screenshots/life-timer-2.jpg',
        '/screenshots/life-timer-3.jpg'
      ],
      category: 'Lifestyle',
      lastUpdate: '2025년 6월 1일'
    },
    {
      id: 'habit-maker',
      name: 'Habit Maker',
      subtitle: '스마트 습관 관리 앱',
      description: '작은 일상 습관이 큰 변화를 만듭니다. 최대 30개의 습관을 템플릿으로 관리하고, 직관적인 체크리스트와 아름다운 통계로 꾸준한 성장을 도와주는 스마트 습관 관리 앱입니다.',
      icon: '✅',
      status: '출시됨',
      statusColor: 'bg-green-100 text-green-800',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.habitmaker.app',
      features: [
        '최대 30개 습관 템플릿 관리',
        '카테고리별 습관 정리 (건강, 학습, 라이프스타일)',
        '직관적인 일일 체크리스트',
        '실시간 진행률 추적 및 시각화',
        '일/주/월별 완료율 차트 및 성취 시스템'
      ],
      screenshots: [
        '/screenshots/habit-maker-1.jpg',
        '/screenshots/habit-maker-2.jpg',
        '/screenshots/habit-maker-3.jpg'
      ],
      category: 'Productivity',
      lastUpdate: '2025년 6월 1일'
    },
    {
      id: 'memory-gym',
      name: '암기훈련소',
      subtitle: '두뇌 훈련 플랫폼',
      description: '효과적인 암기와 학습을 위한 스마트 훈련 시스템입니다. 과목별 퀴즈 관리와 반복 학습으로 기억력을 향상시킵니다.',
      icon: '🧠',
      status: '출시 준비중',
      statusColor: 'bg-yellow-100 text-yellow-800',
      playStoreUrl: '#',
      features: [
        '과목별 퀴즈 관리 시스템',
        '스마트 반복 학습 알고리즘',
        '학습 진도 추적',
        '대량 퀴즈 업로드 지원',
        '엑셀 파일 import 기능'
      ],
      screenshots: [
        '/screenshots/memory-gym-1.jpg',
        '/screenshots/memory-gym-2.jpg',
        '/screenshots/memory-gym-3.jpg'
      ],
      category: 'Education',
      lastUpdate: '개발 중'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                가
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">가월 (Gawol)</h1>
                <p className="text-gray-600">모바일 앱 개발자</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="mailto:wjb127@naver.com" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
                <span className="hidden sm:inline">문의하기</span>
              </a>
              <a href="tel:+821050568463" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Phone className="w-5 h-5" />
                <span className="hidden sm:inline">연락처</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            혁신적인 모바일 앱으로<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              일상을 더 의미있게
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            사용자의 삶에 실질적인 가치를 제공하는 앱을 개발합니다. 
            시간 관리부터 학습 효율성까지, 더 나은 일상을 위한 디지털 솔루션을 만들어갑니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white rounded-lg px-6 py-3 shadow-sm border">
              <div className="flex items-center space-x-2">
                <Smartphone className="w-5 h-5 text-blue-600" />
                <span className="font-medium">모바일 앱 개발</span>
              </div>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-sm border">
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-green-600" />
                <span className="font-medium">웹 개발</span>
              </div>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-sm border">
              <div className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-purple-600" />
                <span className="font-medium">UX/UI 디자인</span>
              </div>
            </div>
          </div>
        </section>

        {/* Apps Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">출시 앱 & 프로젝트</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {apps.map((app) => (
              <div key={app.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{app.icon}</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-800">{app.name}</h4>
                        <p className="text-gray-600">{app.subtitle}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${app.statusColor}`}>
                      {app.status}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {app.description}
                  </p>

                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-800 mb-3">주요 기능</h5>
                    <ul className="space-y-2">
                      {app.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">{app.category}</span> • {app.lastUpdate}
                    </div>
                    {app.playStoreUrl !== '#' ? (
                      <a
                        href={app.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        <span>Play Store</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <div className="flex items-center space-x-2 bg-gray-100 text-gray-500 px-4 py-2 rounded-lg">
                        <Clock className="w-4 h-4" />
                        <span>출시 예정</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">개발 현황</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-gray-600">개발 프로젝트</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">2</div>
              <div className="text-gray-600">출시 앱</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-gray-600">지원 언어</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">지속적 개발</div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">프로젝트 문의 & 협업</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            새로운 아이디어나 협업 제안이 있으시다면 언제든 연락주세요. 
            함께 혁신적인 앱을 만들어보아요!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:wjb127@naver.com"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>이메일 보내기</span>
            </a>
            <a
              href="tel:+821050568463"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-400 transition-colors flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>전화 문의</span>
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h4 className="text-xl font-bold mb-2">가월 (Gawol)</h4>
            <p className="text-gray-400">모바일 앱 개발자</p>
          </div>
          <div className="text-sm text-gray-400 space-y-1">
            <p>이메일: wjb127@naver.com | 전화: 010-5056-8463</p>
            <p>주소: 답십리로1길 10 102동 2804호 동대문구, 서울특별시 02559</p>
            <p className="mt-4">© 2025 가월. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
