var Glavnaya = React.createClass({
	render: function() {
		return(
				<div id="block">
					<p className="wow animate__animated animate__fadeInDown">
			Наша компания занимается ремонтом всех типов печатных устройств, начиная от простых струйных принтеров и заканчивая сложными полиграфическими машинами. Более 10 лет мы оказываем комплексные услуги по ремонту, обслуживанию и техническому сопровождению оборудования, благодаря чему имеем значительный опыт и уникальную экспертизу в этой сфере.
					</p>
					<img loading="lazy" data-wow-delay="0.8s" className="wow animate__animated animate__backInLeft" src="https://unitcopier.ru/upload/iblock/013/0132021b5139932a75eb4121f292512f.jpg"></img>
					<p data-wow-offset="290" data-wow-delay="0.5s" className="wow animate__animated animate__fadeInDown">
			Наши специалисты - высококвалифицированные техники, которые имеют глубокое знание и большой опыт работы с печатным оборудованием разных производителей. Благодаря их профессионализму мы можем гарантировать надежность и эффективность выполнения всех работ.
					</p>
					<img loading="lazy" data-wow-delay="0.6s" data-wow-offset="250" className="wow animate__animated animate__backInRight" src="https://top-fon.com/uploads/posts/2023-01/1674871505_top-fon-com-p-fon-dlya-prezentatsii-printeri-51.jpg"></img>
					<h3 data-wow-offset="30" className="wow animate__animated animate__fadeInLeft">Компания "ПринтМастер" предлагает:</h3>
					<ul>
						<li data-wow-delay="0.4s" className="wow animate__animated animate__fadeInLeft">Ремонт печатных машин и МФУ</li>
						<li data-wow-delay="0.5s" className="wow animate__animated animate__fadeInLeft">Техническое обслуживание и профилактический ремонт</li>
						<li data-wow-delay="0.7s" className="wow animate__animated animate__fadeInLeft">Заправка и восстановление картриджей</li>
						<li data-wow-delay="1s" className="wow animate__animated animate__fadeInLeft">Поставка запасных частей и расходных материалов</li>
					</ul>
					<center><h3>Оставьте комментарий и получите скидку 10% на первую услугу!</h3></center>
					<div width="100%" height="600px" id="vk_comments"></div>
				</div>
		);
	}
});
