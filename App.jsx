import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { ChevronRight, TrendingUp, Users, Zap, Globe, Bot, Briefcase, BarChart3, Brain, Cpu } from 'lucide-react';
import './App.css';

// 导入图片
import aiBrainImg from './assets/ai-brain.jpg';
import aiFutureImg from './assets/ai-future.jpg';
import dataVizImg from './assets/data-viz.jpg';
import techBg1Img from './assets/tech-bg1.jpg';
import techBg2Img from './assets/tech-bg2.jpg';

const App = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    {
      id: 'overview',
      title: '概览',
      icon: <Globe className="w-5 h-5" />,
      description: '人工智能趋势全景'
    },
    {
      id: 'speed',
      title: '变化速度',
      icon: <Zap className="w-5 h-5" />,
      description: '前所未有的发展速度'
    },
    {
      id: 'growth',
      title: '用户增长',
      icon: <Users className="w-5 h-5" />,
      description: 'AI用户与使用量爆炸式增长'
    },
    {
      id: 'compute',
      title: '计算成本',
      icon: <Cpu className="w-5 h-5" />,
      description: '计算成本与性能趋势'
    },
    {
      id: 'monetization',
      title: '商业化',
      icon: <BarChart3 className="w-5 h-5" />,
      description: 'AI变现挑战与机遇'
    },
    {
      id: 'physical',
      title: '物理世界',
      icon: <Bot className="w-5 h-5" />,
      description: 'AI与物理世界的融合'
    },
    {
      id: 'global',
      title: '全球用户',
      icon: <TrendingUp className="w-5 h-5" />,
      description: '全球互联网用户增长'
    },
    {
      id: 'work',
      title: '工作演变',
      icon: <Briefcase className="w-5 h-5" />,
      description: 'AI对工作的影响'
    }
  ];

  const keyInsights = [
    {
      title: 'AI训练数据增长',
      value: '260%',
      description: '15年间年均增长率',
      trend: 'up'
    },
    {
      title: '计算能力提升',
      value: '360%',
      description: '15年间年均增长率',
      trend: 'up'
    },
    {
      title: 'ChatGPT用户',
      value: '800M',
      description: '周活跃用户数',
      trend: 'up'
    },
    {
      title: 'AI岗位增长',
      value: '448%',
      description: '相比2018年增长',
      trend: 'up'
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                人工智能趋势深度解读
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                基于BOND 2025年AI趋势报告，深入分析人工智能发展的8大核心趋势，
                揭示AI技术如何以前所未有的速度重塑世界。
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyInsights.map((insight, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-3xl font-bold text-blue-600">
                      {insight.value}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold">{insight.title}</p>
                    <p className="text-sm text-muted-foreground">{insight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={aiBrainImg} 
                alt="AI Brain" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">AI技术复合增长</h3>
                  <p className="text-lg">数据、算力、算法三重驱动的指数级发展</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'speed':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">变化速度前所未有</h2>
              <p className="text-lg text-muted-foreground">
                AI的发展速度远超互联网时代，技术复合增长推动史无前例的变革
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    技术复合增长
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>训练数据规模</span>
                      <Badge variant="secondary">+260%/年</Badge>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>计算能力</span>
                      <Badge variant="secondary">+360%/年</Badge>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>算法效率</span>
                      <Badge variant="secondary">+200%/年</Badge>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>历史对比</CardTitle>
                  <CardDescription>
                    AI发展速度与历史技术革命的对比
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-sm text-muted-foreground">
                      互联网时代，Vint Cerf说："互联网的一年相当于狗年，等于普通人生活的七年。"
                    </div>
                    <div className="text-sm">
                      而现在，AI用户和使用量的增长速度比互联网时代更快，机器的发展速度已经超越了人类。
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800">
                        AI技术演进的速度和范围确实是史无前例的
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      
      case 'growth':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">AI用户与使用量爆炸式增长</h2>
              <p className="text-lg text-muted-foreground">
                ChatGPT成为历史上最大的"一夜成功"，AI使用量在全球范围内激增
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>用户增长对比</CardTitle>
                  <CardDescription>
                    互联网 vs 大语言模型用户增长速度
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">互联网（23年后）</span>
                        <span className="text-2xl font-bold text-blue-600">50%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-blue-600 h-3 rounded-full" style={{width: '50%'}}></div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">北美以外用户占比</p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">大语言模型（3年后）</span>
                        <span className="text-2xl font-bold text-purple-600">90%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-purple-600 h-3 rounded-full" style={{width: '90%'}}></div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">北美以外用户占比</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>关键数据</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">800M</div>
                    <div className="text-sm text-muted-foreground">ChatGPT周活跃用户</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">6M</div>
                    <div className="text-sm text-muted-foreground">开发者生态系统</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">$212B</div>
                    <div className="text-sm text-muted-foreground">六大科技公司资本支出</div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>全球同步增长</CardTitle>
                <CardDescription>
                  与互联网1.0革命不同，ChatGPT一开始就在全球范围内同步增长
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative rounded-lg overflow-hidden">
                  <img 
                    src={aiFutureImg} 
                    alt="AI Future" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-center">
                    <div className="p-6 text-white">
                      <h4 className="text-xl font-bold mb-2">全球化AI采用</h4>
                      <p>AI技术从一开始就在全球大部分地区同时增长，这是前所未见的技术扩散模式</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      default:
        return (
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">内容开发中</h2>
            <p className="text-lg text-muted-foreground">
              该部分内容正在开发中，敬请期待...
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">AI趋势解读</h1>
                <p className="text-sm text-muted-foreground">BOND 2025 报告</p>
              </div>
            </div>
            <Badge variant="outline" className="hidden sm:flex">
              2025年5月
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">章节导航</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {sections.map((section) => (
                  <Button
                    key={section.id}
                    variant={activeSection === section.id ? "default" : "ghost"}
                    className="w-full justify-start h-auto p-3"
                    onClick={() => setActiveSection(section.id)}
                  >
                    <div className="flex items-center space-x-3">
                      {section.icon}
                      <div className="text-left">
                        <div className="font-semibold">{section.title}</div>
                        <div className="text-xs text-muted-foreground">
                          {section.description}
                        </div>
                      </div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border p-8">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Brain className="w-5 h-5" />
              <span className="font-semibold">AI趋势解读网站</span>
            </div>
            <p className="text-slate-400">
              基于BOND 2025年人工智能趋势报告制作 | 深入理解AI发展趋势
            </p>
            <div className="flex justify-center space-x-4 text-sm text-slate-400">
              <span>数据来源: BOND</span>
              <span>•</span>
              <span>报告时间: 2025年5月</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

