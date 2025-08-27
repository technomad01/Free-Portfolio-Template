import Image from "next/image";

const EmailIcon = () => {
  const email = "example@example.com";
  const subject = "Hello";
  const body = "This is a test email";

  const handleClick = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div onClick={handleClick}>
      <Image src="/icons/envelope.png" alt="" width={26} height={26} />
    </div>
  );
};

export default EmailIcon;
