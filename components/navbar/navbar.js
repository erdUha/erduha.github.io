var Navbar = React.createClass({
	render: function() {
		return(
			<div id="header">
				<h2>ПринтМастер</h2>
				<div id="navbar">
					<ul>
						<li><a onClick={() => redirect(1)}>Главная</a></li>
						<li><a onClick={() => redirect(2)}>Примеры</a></li>
						<li><a onClick={() => redirect(3)}>Почему выбирают нас?</a></li>
						<li><a onClick={() => redirect(4)}>Видеобиблеотека</a></li>
					</ul>
				</div>
			</div>
		);
	}
});
