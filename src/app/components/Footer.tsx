export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="mx-auto px-4 py-8" style={{ maxWidth: '980px' }}>
        <div className="text-left text-gray-600">
          © {new Date().getFullYear()} Strassen und Brückenbau. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
