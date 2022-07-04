import logo from '../../images/logo/logo.png';
const Header = () => {
	return (
		<header>
			<div className="left">
				<div className='company-name'>
					<font color="#FF2626">K</font>
					<font color="#00C1D4">a</font>
					<font color="#66CC66">l</font>
					<font color="#FFD523">e</font>
					<font color="#FF9966">i</font>
					<font color="#0F52BA">d</font>
					<font color="#66CC66">o</font>
					<font color="#FF2626">s</font>
					<font color="#FFD523">c</font>
					<font color="#00C1D4">o</font>
					<font color="#0F52BA">p</font>
					<font color="#FF2626">e</font>
					{/* <font>Kaleidoscope</font> */}
				</div>
				<div className='quote text-center'>
					- A little something about many different things.
				</div>
			</div>
			<div className="right">
				<img src={logo} alt="" />
			</div>
			<div className="bottom quote">
			If it is better to be happy as a result of one's own exertions than by physical possessions, wealth or fortune.<br/>
				{/* I am the wisest man alive, for I know one thing that is that I know nothing. */}
				{/* <footer className='quote' style={{ textAlign: 'right' }}>&mdash; Aristotle</footer> */}
			</div>
		</header>

	);
};
export default Header;
