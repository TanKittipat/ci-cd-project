const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <aside>
        <img src="./logo.png" className="size-12" alt="logo" />
      </aside>
      <nav>
        <h6 className="footer-title">โรงเรียนบางแพปฐมพิทยา</h6>
        <p className="link link-hover">เลขที่​ 159</p>
        <p className="link link-hover">หมู่ที่​ 3</p>
        <p className="link link-hover">ตำบล บางแพ</p>
        <p className="link link-hover">อำเภอบางแพ ราชบุรี 70160</p>
      </nav>
      <nav>
        <h6 className="footer-title">ติดต่อ</h6>
        <p className="link link-hover">032 381 186</p>
        <h6 className="footer-title">เวลาทำการ</h6>
        <p className="link link-hover">8:00 - 16:30</p>
      </nav>
      <nav>
        <h6 className="footer-title">Facebook pages</h6>
        <a className="link link-hover">Bangpae_smile</a>
        <a className="link link-hover">ทะเบียนวัดผลโรงเรียนบางแพปฐมพิทยา</a>
      </nav>
    </footer>
  );
};

export default Footer;
