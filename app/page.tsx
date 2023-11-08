import { Suspense } from "react";
import { Footer } from "./components/footer";
import { Region } from "./components/region";
import { Illustration } from "./components/illustration";
import { unstable_noStore } from "next/cache";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(() => resolve(""), ms));
}

async function Delay({
  children,
  ms,
}: {
  children: React.ReactNode;
  ms: number;
}) {
  unstable_noStore();
  await sleep(ms);
  return children;
}

function DynamicDate() {
  unstable_noStore();
  return <>{new Date().toISOString()}</>;
}

function NodeVersion() {
  let longString = "";
  for (let i = 0; i < 33000; i++) {
    longString += "a";
  }
  return (
    <>
      {process.versions.node}
      <span style={{ display: "none" }}>{longString}</span>
    </>
  );
}

function getRegion() {
  return process.env.VERCEL_REGION || "";
}

export default async function Page() {
  return (
    <>
      <main>
        <Illustration />
        <div className="meta">
          <div className="info">
            <span>
              <Nodejs />
              Node.js Version
            </span>
            <Suspense fallback={<strong>Loading...</strong>}>
              {/* @ts-expect-error Async Server Component */}
              <Delay ms={50}>
                <strong>
                  <NodeVersion />
                </strong>
              </Delay>
            </Suspense>
          </div>
          <div className="info">
            <span>Compute Region</span>
            <Suspense
              fallback={
                <span className="region">
                  <strong>Artificially delayed</strong>
                </span>
              }
            >
              {/* @ts-expect-error Async Server Component */}
              <Delay ms={3000}>
                <Region region={getRegion()} />
              </Delay>
            </Suspense>
          </div>
        </div>
      </main>

      <Footer>
        <Suspense fallback={<p>Loading…</p>}>
          <p>
            Generated at <DynamicDate /> by{" "}
            <a
              href="https://vercel.com/docs/concepts/functions/serverless-functions"
              target="_blank"
              rel="noreferrer"
            >
              Vercel Serverless Functions
            </a>
          </p>
        </Suspense>
      </Footer>
    </>
  );
}

function Nodejs(props: React.HTMLAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      width={127}
      height={144}
      viewBox="0 0 127 144"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="abc"
        style={{
          maskType: "luminance",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={127}
        height={144}
      >
        <path
          d="M60.299 1.452L4.126 33.874A6.78 6.78 0 00.73 39.75v64.891a6.778 6.778 0 003.395 5.874l56.177 32.448a6.798 6.798 0 006.787 0l56.168-32.448a6.794 6.794 0 003.386-5.874V39.75a6.779 6.779 0 00-3.4-5.876L67.084 1.452a6.831 6.831 0 00-6.8 0"
          fill="#fff"
        />
      </mask>
      <g mask="url(#abc)">
        <path
          d="M183.409 28.37L25.123-49.218l-81.16 165.565 158.283 77.59 81.163-165.569z"
          fill="url(#paint0_linear_0_1)"
        />
      </g>
      <mask
        id="b"
        style={{
          maskType: "luminance",
        }}
        maskUnits="userSpaceOnUse"
        x={2}
        y={0}
        width={123}
        height={144}
      >
        <path
          d="M2.123 108.76a6.795 6.795 0 002 1.754l48.187 27.834 8.026 4.613c1.2.693 2.568.987 3.912.887.448-.036.896-.12 1.334-.244l59.245-108.48a6.705 6.705 0 00-1.579-1.254L86.467 12.63 67.024 1.444a7.092 7.092 0 00-1.76-.707L2.124 108.76z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#b)">
        <path
          d="M-66.314 51.317l111.766 151.27L193.265 93.38 81.492-57.887-66.314 51.317z"
          fill="url(#paint1_linear_0_1)"
        />
      </g>
      <mask
        id="c"
        style={{
          maskType: "luminance",
        }}
        maskUnits="userSpaceOnUse"
        x={4}
        y={0}
        width={123}
        height={144}
      >
        <path
          d="M63.014.583a6.853 6.853 0 00-2.714.869L4.287 33.782l60.4 110.012c.84-.12 1.667-.4 2.413-.832l56.174-32.448a6.806 6.806 0 003.28-4.634L64.98.693a7.054 7.054 0 00-1.373-.136c-.187 0-.373.01-.56.027"
          fill="#fff"
        />
      </mask>
      <g mask="url(#c)">
        <path
          d="M4.286.557v143.24H126.53V.557H4.286z"
          fill="url(#paint2_linear_0_1)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_0_1"
          x1={104.219}
          y1={-10.5462}
          x2={23.0644}
          y2={155.008}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.3} stopColor="#3E863D" />
          <stop offset={0.5} stopColor="#55934F" />
          <stop offset={0.8} stopColor="#5AAD45" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_0_1"
          x1={-9.7611}
          y1={127.819}
          x2={138.058}
          y2={18.5988}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.57} stopColor="#3E863D" />
          <stop offset={0.72} stopColor="#619857" />
          <stop offset={1} stopColor="#76AC64" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_0_1"
          x1={4.32698}
          y1={72.181}
          x2={126.553}
          y2={72.181}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.16} stopColor="#6BBF47" />
          <stop offset={0.38} stopColor="#79B461" />
          <stop offset={0.47} stopColor="#75AC64" />
          <stop offset={0.7} stopColor="#659E5A" />
          <stop offset={0.9} stopColor="#3E863D" />
        </linearGradient>
      </defs>
    </svg>
  );
}
