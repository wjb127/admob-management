'use client';

import { ExternalLink, Clock, Brain, Smartphone, Mail, Phone, Globe, Download, Star, Award, Zap } from 'lucide-react';

export default function GawolPortfolio() {
  const apps = [
    {
      id: 'life-timer',
      name: 'Life Timer - Life Calculator',
      subtitle: '남은 수명 계산기',
      description: '통계 데이터를 기반으로 남은 생명 시간을 계산하여 매일 시간의 소중한 가치를 깨닫게 도와주는 동기부여 앱입니다.',
      icon: '⏰',
      status: '출시됨',
      statusColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black',
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
      statusColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black',
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
      statusColor: 'bg-gradient-to-r from-amber-400 to-amber-600 text-black',
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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Luxury Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,215,0,0.05)_49%,rgba(255,215,0,0.05)_51%,transparent_52%)] bg-[length:20px_20px]"></div>
      
      {/* Header */}
      <header className="relative bg-black/80 backdrop-blur-md border-b border-yellow-500/30 shadow-2xl">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 rounded-full flex items-center justify-center text-black text-3xl font-bold shadow-2xl">
                  가
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 text-black" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                  가월 (Gawol)
                </h1>
                <p className="text-gray-300 text-lg font-medium">Premium Mobile App Developer</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a href="mailto:wjb127@naver.com" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-105">
                <Mail className="w-6 h-6" />
                <span className="hidden sm:inline font-medium">문의하기</span>
              </a>
              <a href="tel:+821050568463" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-105">
                <Phone className="w-6 h-6" />
                <span className="hidden sm:inline font-medium">연락처</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="relative container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="relative">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              혁신적인 모바일 앱으로<br />
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                일상을 더 의미있게
              </span>
            </h2>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            사용자의 삶에 실질적인 가치를 제공하는 프리미엄 앱을 개발합니다. 
            시간 관리부터 학습 효율성까지, 더 나은 일상을 위한 럭셔리 디지털 솔루션을 만들어갑니다.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-gradient-to-r from-yellow-400/10 to-amber-600/10 backdrop-blur-md rounded-xl px-8 py-4 border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-3">
                <Smartphone className="w-6 h-6 text-yellow-400" />
                <span className="font-semibold text-white">모바일 앱 개발</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-400/10 to-amber-600/10 backdrop-blur-md rounded-xl px-8 py-4 border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-3">
                <Globe className="w-6 h-6 text-yellow-400" />
                <span className="font-semibold text-white">웹 개발</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-400/10 to-amber-600/10 backdrop-blur-md rounded-xl px-8 py-4 border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-3">
                <Brain className="w-6 h-6 text-yellow-400" />
                <span className="font-semibold text-white">UX/UI 디자인</span>
              </div>
            </div>
          </div>
        </section>

        {/* Apps Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Premium <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">Portfolio</span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {apps.map((app) => (
              <div key={app.id} className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-yellow-500/20">
                {/* Luxury Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-5xl filter drop-shadow-lg">{app.icon}</div>
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-1">{app.name}</h4>
                        <p className="text-gray-300 text-lg">{app.subtitle}</p>
                      </div>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${app.statusColor}`}>
                      {app.status}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                    {app.description}
                  </p>

                  <div className="mb-8">
                    <h5 className="font-bold text-yellow-400 mb-4 text-lg flex items-center">
                      <Award className="w-5 h-5 mr-2" />
                      주요 기능
                    </h5>
                    <ul className="space-y-3">
                      {app.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3 text-gray-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full shadow-lg"></div>
                          <span className="text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-gray-400">
                      <span className="font-semibold text-yellow-400">{app.category}</span> • {app.lastUpdate}
                    </div>
                    {app.playStoreUrl !== '#' ? (
                      <a
                        href={app.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-amber-600 text-black px-6 py-3 rounded-xl font-bold hover:from-yellow-500 hover:to-amber-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-500/30"
                      >
                        <Download className="w-5 h-5" />
                        <span>Play Store</span>
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    ) : (
                      <div className="flex items-center space-x-2 bg-gradient-to-r from-amber-400/20 to-amber-600/20 text-amber-400 px-6 py-3 rounded-xl font-bold border border-amber-500/30">
                        <Clock className="w-5 h-5" />
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
        <section className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-md rounded-2xl shadow-2xl p-10 mb-20 border border-yellow-500/20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">개발 현황</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">3</div>
              <div className="text-gray-300 font-medium">개발 프로젝트</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">2</div>
              <div className="text-gray-300 font-medium">출시 앱</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">3</div>
              <div className="text-gray-300 font-medium">지원 언어</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                24/7
              </div>
              <div className="text-gray-300 font-medium">지속적 개발</div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 rounded-2xl text-black p-10 text-center shadow-2xl relative overflow-hidden">
          {/* Luxury Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(0,0,0,0.05)_49%,rgba(0,0,0,0.05)_51%,transparent_52%)] bg-[length:30px_30px]"></div>
          
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center">
              <Zap className="w-8 h-8 mr-3" />
              프로젝트 문의 & 협업
            </h3>
            <p className="text-black/80 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              새로운 아이디어나 협업 제안이 있으시다면 언제든 연락주세요. 
              함께 혁신적이고 럭셔리한 앱을 만들어보아요!
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="mailto:wjb127@naver.com"
                className="bg-black text-yellow-400 px-8 py-4 rounded-xl font-bold hover:bg-gray-900 transition-all duration-300 flex items-center space-x-3 hover:scale-105 shadow-lg"
              >
                <Mail className="w-6 h-6" />
                <span>이메일 보내기</span>
              </a>
              <a
                href="tel:+821050568463"
                className="bg-yellow-600 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-700 transition-all duration-300 flex items-center space-x-3 hover:scale-105 shadow-lg"
              >
                <Phone className="w-6 h-6" />
                <span>전화 문의</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative bg-black border-t border-yellow-500/30 py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h4 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent mb-3">
              가월 (Gawol)
            </h4>
            <p className="text-gray-400 text-lg">Premium Mobile App Developer</p>
          </div>
          <div className="text-gray-400 space-y-2">
            <p className="flex items-center justify-center space-x-4">
              <span>이메일: wjb127@naver.com</span>
              <span>•</span>
              <span>전화: 010-5056-8463</span>
            </p>
            <p>주소: 답십리로1길 10 102동 2804호 동대문구, 서울특별시 02559</p>
            <div className="mt-6 pt-6 border-t border-yellow-500/20">
              <p className="text-yellow-400 font-medium">© 2025 가월. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
