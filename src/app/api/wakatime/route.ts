import { NextResponse } from 'next/server';

// WakaTime API相关配置
const WAKATIME_BASE_URL = 'https://wakatime.com/api/v1';

export async function GET() {
  try {
    // 从环境变量获取WakaTime API Key
    const apiKey = process.env.WAKATIME_API_KEY;
    
    if (!apiKey) {
      console.warn('WakaTime API Key未配置，返回模拟数据');
      // 返回模拟数据用于开发测试
      return NextResponse.json({
        success: true,
        data: {
          total_seconds: 433800, // 120小时30分钟的秒数
          text: '120小时30分钟',
          human_readable_total: '120 hrs 30 mins'
        }
      });
    }

    // 获取过去30天的编码统计
    const response = await fetch(
      `${WAKATIME_BASE_URL}/users/current/stats/last_30_days`,
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        // 缓存请求结果5分钟
        next: { revalidate: 300 }
      }
    );

    if (!response.ok) {
      throw new Error(`WakaTime API请求失败: ${response.status}`);
    }

    const data = await response.json();
    
    // 提取总编码时间
    const totalSeconds = data.data?.total_seconds || 0;
    const humanReadableTotal = data.data?.human_readable_total || '0 mins';
    
    // 转换为中文格式
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const chineseText = `${hours}小时${minutes}分钟`;

    return NextResponse.json({
      success: true,
      data: {
        total_seconds: totalSeconds,
        text: chineseText,
        human_readable_total: humanReadableTotal,
        period: '过去30天'
      }
    });

  } catch (error) {
    console.error('获取WakaTime数据失败:', error);
    
    // 返回错误信息和模拟数据
    return NextResponse.json({
      success: false,
      error: '获取编码时长失败',
      data: {
        total_seconds: 0,
        text: '获取失败',
        human_readable_total: '0 mins'
      }
    }, { status: 500 });
  }
} 