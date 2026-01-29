const Footer = () => {
  return (
    <footer className="border-t bg-white mt-16">
      <div className="mx-auto max-w-screen-xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600">
        <span>© 2023 Flowbite™. All Rights Reserved.</span>

        <ul className="flex space-x-6 mt-4 sm:mt-0">
          <li className="hover:underline">About</li>
          <li className="hover:underline">Privacy Policy</li>
          <li className="hover:underline">Licensing</li>
          <li className="hover:underline">Contact</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
