import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <button onClick={() => router.push("/wallet")}>Wallet</button>
      <button onClick={() => router.push("/create")}>Create Community</button>
    </>
  );
};

export default Navbar;
