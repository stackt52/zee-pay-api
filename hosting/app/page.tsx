import Link from 'next/link';

export default function Page() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>ZeePay API</h1>
      <p>Welcome to the ZeePay API documentation site.</p>
      <Link href="/docs" style={{ color: 'blue', textDecoration: 'underline' }}>
        View OpenAPI Documentation
      </Link>
    </div>
  );
}
