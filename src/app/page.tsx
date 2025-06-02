'use client';

import { useState } from 'react';
import { Settings, BarChart3, FileText, Globe, CheckCircle, AlertCircle } from 'lucide-react';

export default function AdMobDashboard() {
  const [publisherId, setPublisherId] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const handlePublisherIdSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (publisherId.startsWith('pub-') && publisherId.length > 10) {
      setIsConnected(true);
      // Here you would typically save to backend/database
      localStorage.setItem('admob_publisher_id', publisherId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            AdMob 관리 시스템
          </h1>
          <p className="text-lg text-gray-600">
            Google AdMob 광고를 쉽게 관리하고 모니터링하세요
          </p>
        </header>

        {/* Connection Status */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {isConnected ? (
                <CheckCircle className="text-green-500 w-6 h-6" />
              ) : (
                <AlertCircle className="text-yellow-500 w-6 h-6" />
              )}
              <h2 className="text-xl font-semibold">
                AdMob 연결 상태
              </h2>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              isConnected 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {isConnected ? '연결됨' : '연결 필요'}
            </span>
          </div>
        </div>

        {/* Publisher ID Setup */}
        {!isConnected && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">AdMob Publisher ID 설정</h3>
            <form onSubmit={handlePublisherIdSubmit} className="space-y-4">
              <div>
                <label htmlFor="publisherId" className="block text-sm font-medium text-gray-700 mb-2">
                  Publisher ID (pub-XXXXXXXXXXXXXXXX)
                </label>
                <input
                  type="text"
                  id="publisherId"
                  value={publisherId}
                  onChange={(e) => setPublisherId(e.target.value)}
                  placeholder="pub-0000000000000000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                연결하기
              </button>
            </form>
          </div>
        )}

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">수익 분석</h3>
            <p className="text-gray-600 text-sm">
              실시간 광고 수익과 성과를 확인하세요
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Settings className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">광고 설정</h3>
            <p className="text-gray-600 text-sm">
              광고 단위와 배치를 관리하세요
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <FileText className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">app-ads.txt</h3>
            <p className="text-gray-600 text-sm">
              app-ads.txt 파일이 자동으로 설정됩니다
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Globe className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">도메인 연결</h3>
            <p className="text-gray-600 text-sm">
              Vercel을 통한 자동 배포 지원
            </p>
          </div>
        </div>

        {/* Setup Instructions */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">설정 가이드</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <h4 className="font-medium">Google Play Console에서 웹사이트 등록</h4>
                <p className="text-gray-600 text-sm">
                  Play Console → 앱 → 스토어 설정 → 스토어 등록정보에서 웹사이트 URL을 등록하세요
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <h4 className="font-medium">AdMob 계정 연결</h4>
                <p className="text-gray-600 text-sm">
                  AdMob 계정에서 Publisher ID를 확인하고 위에 입력하세요
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <h4 className="font-medium">app-ads.txt 자동 설정</h4>
                <p className="text-gray-600 text-sm">
                  이 사이트는 자동으로 app-ads.txt 파일을 제공합니다 (도메인/app-ads.txt)
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <h4 className="font-medium">Vercel 배포</h4>
                <p className="text-gray-600 text-sm">
                  GitHub에 푸시 후 Vercel에서 자동 배포하여 도메인을 얻으세요
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-500">
          <p>AdMob 관리 시스템 - Google AdMob과 연동하여 광고를 효율적으로 관리하세요</p>
        </footer>
      </div>
    </div>
  );
}
