export const NavBar = () => {
  return (
    <Wrapper>
      <Container>
        <Link to={"/"}>
          <NavLogo src={"/assets/react.svg"} alt={"logo"} />
        </Link>
        <SearchInput />
        <Link to={"/my-cart"}>
          <CartIcon active={cartItems && cartItems.length > 0} />
        </Link>
      </Container>
    </Wrapper>
  );
};

export default NavBar;
