const Navbar = () => {
  return (
    <header className="navbar bg-base-100 shadow-md fixed top-0">
      <div className="navbar-start">
        <a href="/" className="btn btn-ghost text-md space-x-1">
          <img src="./logo.png" alt="logo" className="size-10" />
          <span>ระบบเยี่ยมบ้านโรงเรียนบางแพปฐมพิทยา</span>
        </a>
      </div>

      <div className="navbar-end">
        <a className="btn btn-neutral">ลงชื่อเข้าใช้งาน</a>
      </div>
    </header>
  );
};

export default Navbar;
