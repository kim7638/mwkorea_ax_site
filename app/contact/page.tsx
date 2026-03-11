'use client';

import { useState } from 'react';
import { Send, CheckCircle2, MapPin, Mail } from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';
import Button from '@/components/ui/Button';

const inputClass =
  'w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all duration-200';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Placeholder — connect to API or form service later
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-surface border-b border-gray-100">
        <PageContainer>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-4">Contact</p>
            <h1 className="text-4xl sm:text-5xl font-display font-700 text-gray-900 leading-tight tracking-tight mb-5">
              Let's start a conversation.
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              구체적인 프로젝트가 있으시든, AI의 가능성을 탐색하는 단계이시든 — 언제든지 연락 주세요.
            </p>
          </div>
        </PageContainer>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-24 bg-white">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display font-semibold text-gray-900 text-xl mb-3">
                  How we typically engage
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  대부분의 프로젝트는 60분 발굴 세션으로 시작합니다 — 무료, 의무 없음. 경청하고, 날카로운 질문을 드리며, 저희가 적합한 파트너인지 솔직하게 말씀드립니다.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail size={16} className="text-brand" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">Email</p>
                    <a href="mailto:hello@mobileworks.kr" className="text-sm text-gray-700 hover:text-brand transition-colors">
                      hello@mobileworks.kr
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={16} className="text-brand" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">Location</p>
                    <p className="text-sm text-gray-700">Seoul, Republic of Korea</p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-surface border border-gray-100">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">응답 시간</p>
                <p className="text-sm text-gray-600">보통 1 영업일 이내에 답변드립니다. 긴급한 문의는 메시지에 언급해 주세요.</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-5">
                    <CheckCircle2 size={28} className="text-green-500" />
                  </div>
                  <h3 className="font-display font-semibold text-gray-900 text-2xl mb-3">메시지가 전송되었습니다.</h3>
                  <p className="text-gray-500 text-sm max-w-sm">
                    연락해 주셔서 감사합니다. 1 영업일 이내에 연락드리겠습니다.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                        이름 <span className="text-brand">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="이름을 입력하세요"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                        회사
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="회사명을 입력하세요"
                        value={form.company}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                      이메일 <span className="text-brand">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@company.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                      메시지 <span className="text-brand">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      placeholder="프로젝트나 과제에 대해 말씀해 주세요..."
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={loading}
                    className="w-full sm:w-auto"
                  >
                    {loading ? '전송 중...' : '메시지 보내기'}
                    {!loading && <Send size={15} />}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
