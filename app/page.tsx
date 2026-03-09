export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 py-16 sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-400 sm:text-base">
            Enterprise AI Service Builder
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Mobile Works Korea AX
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8 md:text-xl">
            기업의 AX 전환을 위한 서비스 기획, 구축, 운영까지 연결하는
            디지털 파트너.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="w-full rounded-xl bg-white px-6 py-4 text-sm font-semibold text-black transition hover:opacity-90 sm:w-auto sm:text-base">
              Portfolio 보기
            </button>

            <button className="w-full rounded-xl border border-white/30 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto sm:text-base">
              Contact 문의하기
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-gray-400">Service</p>
            <h2 className="mt-2 text-xl font-semibold">AX Strategy</h2>
            <p className="mt-3 text-sm leading-6 text-gray-300 sm:text-base">
              기업 환경에 맞는 AI/AX 서비스 전략과 실행 구조를 설계합니다.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-gray-400">Build</p>
            <h2 className="mt-2 text-xl font-semibold">Service Development</h2>
            <p className="mt-3 text-sm leading-6 text-gray-300 sm:text-base">
              웹·모바일 기반 서비스 구축과 운영 구조까지 함께 만듭니다.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-gray-400">Operate</p>
            <h2 className="mt-2 text-xl font-semibold">AI Operations</h2>
            <p className="mt-3 text-sm leading-6 text-gray-300 sm:text-base">
              실제 운영 단계에서 AI 기능이 작동하도록 서비스 흐름을 고도화합니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}