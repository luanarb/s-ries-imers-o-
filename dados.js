let dados = [
    {
        imagem: "https://img.elo7.com.br/product/zoom/26A8E81/big-poster-serie-greys-anatomy-lo08-tamanho-90x60-cm-presente-nerd.jpg",
        titulo: "Grey's Anatomy",
        descricao: "Grey's Anatomy é uma série dramática que nos leva para dentro de um hospital, onde a vida e a morte se cruzam a cada instante. Acompanhamos a trajetória de um grupo de internos e residentes enquanto eles se dedicam a salvar vidas e, ao mesmo tempo, lidam com os desafios da vida pessoal e profissional. A série, conhecida por suas histórias emocionantes e personagens complexos, explora temas como amor, amizade, perda e o crescimento pessoal em um ambiente de alta pressão.",
        genero: "Drama",
        link: "https://www.primevideo.com/-/pt/detail/A-Anatomia-de-Grey/0OBCH7LRNO59F49ITYD1F3HVXF",
        site: "primevideo",
        tags: "medicos medicina morte"

    }, 
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4Y4ZGxRmG0iv8-j6EzgDzQAgS1h7RoMldaeoyD9A6xculqv8cendu4qee_w12r08VfY&usqp=CAU",
        titulo: "Gilmore Girls",
        descricao: "Gilmore Girls é uma série de comédia dramática que acompanha a vida de Lorelai Gilmore e sua filha Rory em uma pequena cidade da Nova Inglaterra. A série explora a relação entre mãe e filha, além de temas como amizade, amor e a busca por identidade.",
        genero: ["Drama", "Comédia"],
        link:["https://www.netflix.com/br/title/70155618?source=35"],
        site: "netflix",
        tags:"mãe filha melhor"
   },
    {
        imagem:"https://a-static.mlcdn.com.br/450x450/poster-cartaz-the-walking-dead-a-pop-arte-poster/poparteskins2/15938544722/74326201b313d5dc877110613c3fb26e.jpeg",
        titulo: "The Walking Dead",
        descricao:"The Walking Dead é uma série de terror pós-apocalíptica que se passa em um mundo devastado por um surto zumbi. Acompanhamos um grupo de sobreviventes em sua luta pela sobrevivência em um ambiente hostil.", 
        genero: ["Ficção Científica"," Terror", " Ação"],
        link: ["https://www.netflix.com/br/title/70177057?source=35"],
        site: "netflix",
         tags:"zumbi armas morte"
    },
    {
        imagem: "https://a-static.mlcdn.com.br/450x450/poster-cartaz-the-last-of-us-b-serie-pop-arte-poster/poparteskins2/15998657943/791b0469b05391d5e8f6db6332f02ddf.jpeg",
        titulo: "The Last of Us",
        descricao: "Uma adaptação pós-apocalíptica do aclamado videogame, que acompanha a jornada de Joel e Ellie em um mundo devastado por um fungo que transforma humanos em criaturas infectadas.",
        genero: ["Ficção Científica"," Ação"],
        link: "https://www.primevideo.com/-/pt/detail/0NG9COWVOWIP0FC2QL25P0PPCG/ref=atv_sr_fle_c_Tn74RA_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B0C6XBTV8M&qid=1725492612021",
        site: "primevideo",
         tags:""
    },
    {
        imagem: "https://i.pinimg.com/736x/e9/6f/a2/e96fa257d5252b59d358cb6e881f4ad4.jpg",
        titulo: "Wandinha",
        descricao: "Uma série de comédia de terror que acompanha a vida de Wandinha Addams, a filha da Família Addams, enquanto ela frequenta a Escola Nunca Mais.",
        genero: ["Fantasia"," Terror", " Comédia"],
        link: "https://www.netflix.com/br/title/80117498",
        site: "netflix",
         tags:""
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1m48JFrpYZexetSFedDllP6t6r98FBe70bQ&s",
        titulo: "House of the Dragon",
        descricao: "Um prequel de Game of Thrones, que explora a história da Casa Targaryen e a Dança dos Dragões.",
        genero: "Fantasia",
        link: "https://www.hbomax.com/pt-br/series/house-of-the-dragon",
        site: "hbomax",
         tags:""
    },
    {
        imagem: "https://img.elo7.com.br/product/main/3BF0EA2/poster-cartaz-adesivo-decorativo-stranger-things-b-42-5x60cm-stranger-things.jpg",
        titulo: "Stranger Things",
        descricao: "Uma série de ficção científica ambientada nos anos 80, que acompanha um grupo de amigos em busca de um amigo desaparecido, enquanto enfrentam forças sobrenaturais.",
        genero: ["Ficção Científica"," Aventura"],
        link: "https://www.netflix.com/br/title/80057281",
        site: "netflix",
         tags:""
    },
    {
        imagem: "https://a-static.mlcdn.com.br/450x450/poster-cartaz-euphoria-b-pop-arte-poster/poparteskins2/15925939453/c56af278c986e5525dba941a9936a19e.jpeg",
        titulo: "Euphoria",
        descricao: "Uma série dramática que explora os desafios da adolescência, como drogas, sexo e identidade, através dos olhos de um grupo de estudantes.",
        genero: "Drama",
        link: "https://www.hbomax.com/pt-br/series/euphoria",
        site: "hbomax",
         tags:""
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC1FYVGFE3aV87HIxok3FEqfDKRGihlCWs3g&s",
        titulo: "Succession",
        descricao: "Uma série dramática que acompanha a família Roy, proprietária de um dos maiores conglomerados de mídia do mundo, em uma luta pelo poder após a saúde do patriarca declinar.",
        genero: "Drama",
        link:"https://www.max.com/br/pt/shows/succession/a8484031-f244-4661-9fb7-0932bd1ba872",
        site: "hbomax",
         tags:""
    },
    {
        imagem: "https://amoromancesdeepoca.wordpress.com/wp-content/uploads/2020/10/screenshot_20201016-091635_instagram1276661483006363103.jpg?w=1017",
        titulo: "Bridgerton",
        descricao: "Uma série de época que reimagina a alta sociedade londrina do século XIX através de um olhar moderno, com romances, intrigas e escândalos.",
        genero: "Drama histórico",
        link: "https://www.netflix.com/br/title/80232398",
        site: "netflix",
         tags:""
    },
    {
        imagem: "https://uauposters.com.br/media/catalog/product/3/8/380020211103-uau-posters-loki-filmes.jpeg.jpg",
        titulo: "Loki",
        descricao: "Uma série de super-heróis que explora as aventuras do Deus da Trapaça, Loki, através de diferentes linhas do tempo.",
        genero: ["Ficção Científica", " Ação", " Super-herói"," Aventura"],
        link: "https://www.disneyplus.com/pt-br/series/loki/6pARMvILBGzF",
        site: "disneyplus",
         tags:""
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnyC8UJ50pVrQDt9430_1KcTA-KK3gBZLM6Q&s",
        titulo: "Ruptura",
        descricao: "Uma série de ficção científica que explora um mundo onde os funcionários de uma empresa de tecnologia têm suas memórias de trabalho separadas de suas vidas pessoais.",
        genero: "Ficção Científica",
        link: "https://tv.apple.com/br/episode/good-news-about-hell/umc.cmc.s80mx1ic96pu6ewupz8pfasf",
        site: "apple TV",
         tags:""
    },
    {
        imagem: "https://a-static.mlcdn.com.br/450x450/poster-cartaz-the-boys-b-pop-arte-poster/poparteskins2/15925939538/78cc83a1a21e795cc3242e419df65350.jpeg",
        titulo: "The Boys",
        descricao: "Uma sátira sobre super-heróis que explora a corrupção e os excessos de indivíduos com superpoderes.",
        genero: ["Ação"," Super-herói"],
        link: "https://www.primevideo.com/dp/0SSV1CIYHPUKDFUE5JOYRDKF06?ref_=dvm_pds_tit_br_sw_s_g_mkw_stTe0LkZqeN-dc&mrntrk=pcrid_687425192387_slid__pgrid_161324775527_pgeo_9198997_x__adext__ptid_kwd-299098303426&_mkw_stTe0LkZqeN-dc&mrntrk=pcrid_687425192387_slid__pgrid_161324775527_pgeo_9198997_x__adext__ptid_kwd-299098303426&gclid=Cj0KCQjwiuC2BhDSARIsALOVfBLajuFlY3NfqZU3AtmoVr5YX9zTZl6zcLgly8Z4bTBebZH5Bc4FQdwaAjS9EALw_wcB&gclsrc=aw.ds",
        site: "primevideo",
         tags:"The Boys"

    },
    {
        imagem: "https://i.ebayimg.com/images/g/eokAAOSw8gxk-uJI/s-l1200.jpg",
        titulo: "The Expanse",
        descricao: "Uma série de ficção científica que se passa em um futuro onde a humanidade colonizou o sistema solar, e as tensões entre as diferentes facções levam a uma guerra.",
        genero: ["Ação"],
        link: "https://www.primevideo.com/dp/0P0WKNOJSNIXWCR84ZCPJC200L?ref_=dvm_pds_tit_br_sw_s_g_mkw_sJ6CeOy3PjR-dc&mrntrk=pcrid_671813972397_slid__pgrid_153464980552_pgeo_9198997_x__adext__ptid_kwd-169422162&_mkw_sJ6CeOy3PjR-dc&mrntrk=pcrid_671813972397_slid__pgrid_153464980552_pgeo_9198997_x__adext__ptid_kwd-169422162&gclid=Cj0KCQjwiuC2BhDSARIsALOVfBJHNEzxkOLDuON41QOfuoQ0m-6LdkN1qyxPtTm6o67uZ356cVwvBYkaAq_mEALw_wcB&gclsrc=aw.ds",
        site: "primevideo"
    },
    {
        imagem: "https://i.pinimg.com/736x/12/40/68/1240682e3636dc00428bb99493a51eaa.jpg",
        titulo: "Fleabag",
        descricao: "Uma comédia dramática britânica que acompanha a vida caótica e sarcástica de uma mulher em Londres.",
        genero: ["Comédia"],
        link: "https://www.primevideo.com/dp/0S3O4V4A27E3PCHN5WIQ4FCFCD?ref_=dvm_pds_tit_br_sw_s_g_mkw_sCWVI7u3wL2-dc&mrntrk=pcrid_686849173144_slid__pgrid_160274817969_pgeo_9198997_x__adext__ptid_kwd-302305021812&_mkw_sCWVI7u3wL2-dc&mrntrk=pcrid_686849173144_slid__pgrid_160274817969_pgeo_9198997_x__adext__ptid_kwd-302305021812&gclid=Cj0KCQjwiuC2BhDSARIsALOVfBLbYU24YCw7Z9FycTP8JDLmNQqYBPy_o9Zacfr7sfMRCpK0gZ66gyEaAmzwEALw_wcB&gclsrc=aw.ds",
        site: "primevideo"
    },
    {
        imagem: "https://br.web.img3.acsta.net/pictures/19/11/08/21/22/2788583.jpg",
        titulo: "Good Omens",
        descricao: "Uma comédia sobre o fim do mundo, protagonizada por um anjo e um demônio que tentam impedir o apocalipse.",
        genero: ["Comédia", " Fantasia"],
        link: "https://www.primevideo.com/dp/0SKRJEW7XP68EUPBX6I45PBDHW?ref_=dvm_pds_tit_br_sw_s_g_mkw_sgp1IEvEvF2-dc&mrntrk=pcrid_671912986472_slid__pgrid_158606144051_pgeo_9198997_x__adext__ptid_kwd-296524139000&_mkw_sgp1IEvEvF2-dc&mrntrk=pcrid_671912986472_slid__pgrid_158606144051_pgeo_9198997_x__adext__ptid_kwd-296524139000&gclid=Cj0KCQjwiuC2BhDSARIsALOVfBLXcTw_9QzJyBQUzlT_VglOzKXQR8NhVc5FZrL0718CB4re9ToE6D4aAvlfEALw_wcB&gclsrc=aw.ds",
        site: "primevideo"
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSltUwqo1-UWy8qneXVgAwSTA8HvOZTGj_IuQ&s",
        titulo: "Upload",
        descricao: "Uma comédia de ficção científica que explora a ideia de um serviço de upload para a vida após a morte.",
        genero: ["Comédia", " Ficção científica"],
        link: "https://www.primevideo.com/dp/0NQ1QFP6AV9LTV3BD3NYY5U3KA?ref_=dvm_pds_tit_br_sw_s_g_mkw_s4sFVMfDygQ-dc&mrntrk=pcrid_687336234204_slid__pgrid_154474530901_pgeo_9198997_x__adext__ptid_kwd-969653550237&_mkw_s4sFVMfDygQ-dc&mrntrk=pcrid_687336234204_slid__pgrid_154474530901_pgeo_9198997_x__adext__ptid_kwd-969653550237&gclid=Cj0KCQjwiuC2BhDSARIsALOVfBJiRdIPqIDGbBslT-VjyLwBLJ6o48sqeXs0Fx1_7IYAzmVgcrJPt1kaAov2EALw_wcB&gclsrc=aw.ds",
        site: "primevideo"
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNdG7_9FUKvy3sCsYtBHxNcUrXWjkgVfmNfogxkDVa8sIOgvR6VSanpNSAilO37TKHdNA&usqp=CAU",
        titulo: "Bosch",
        descricao: "Um drama policial que acompanha a vida de Harry Bosch, um detetive de homicídios em Los Angeles.",
        genero: ["Drama policial"],
        link: "https://www.primevideo.com/-/pt/detail/Bosch/0TISZ3Q0BNUTSZS11S7VKS6O18",
        site: "primevideo"
    },
    {
        imagem: "https://uauposters.com.br/media/catalog/product/1/8/181520240305-uau-posters-the-marvelous-mrs-maisel-maravilhosa-sra-maisel-series-1.jpg",
        titulo: "A Maravilhosa Sra. Maisel",
        descricao: "Uma comédia de época que acompanha a história de uma dona de casa dos anos 50 que descobre seu talento para o stand-up comedy.",
        genero: ["Comédia"],
        link: "https://www.primevideo.com/dp/0IE5VOH7B4HB0QHHB37W2DEQPK?ref_=dvm_pds_tit_br_sw_s_g_mkw_shx4pUl7w4j-dc&mrntrk=pcrid_671912986310_slid__pgrid_153464978072_pgeo_9198997_x__adext__ptid_kwd-299116402046&_mkw_shx4pUl7w4j-dc&mrntrk=pcrid_671912986310_slid__pgrid_153464978072_pgeo_9198997_x__adext__ptid_kwd-299116402046&gclid=Cj0KCQjwiuC2BhDSARIsALOVfBJC0MxPvuM2u60vCXuVKa7EgiyY_VFmOcwFV4ot_h1bqjlBLmA7RKwaAgC9EALw_wcB&gclsrc=aw.ds",
        site: "primevideo"
    },
    {
        imagem: "https://movieposters2.com/images/2226849-b.jpg",
        titulo: "Citadel",
        descricao: "Uma série de espionagem com Priyanka Chopra Jonas e Richard Madden, que acompanham agentes de uma organização secreta que tentam reconstruir suas vidas após serem traídos.",
        genero: ["Ação", " Espionagem"],
        link: "https://www.primevideo.com/-/pt/detail/Citadel/0U5UNXQ1U9T6S6J2XCIV6UAMWF",
        site: "primevideo"
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8iCSo3iCnyvQlQsgNsvYXcEjGGOghZX8luXlcxGyRbYeeVSx3LEEtDmb-5Juo2Iy0U20&usqp=CAU",
        titulo: "Periféricos",
        descricao: "Uma série de ficção científica que explora um futuro distópico, onde uma jovem descobre que o mundo que ela conhece não é o que parece.",
        genero: ["Ficção científica", " Cyberpunk", " Thriller"],
        link: "https://www.primevideo.com/dp/0PE2SANXUROCEZ5W2FD7WGMM9R?ref_=dvm_pds_tit_br_sw_s_g_mkw_suY7ekNlUxk-dc&mrntrk=pcrid_671813972145_slid__pgrid_158606130131_pgeo_9198997_x__adext__ptid_kwd-298815527262&_mkw_suY7ekNlUxk-dc&mrntrk=pcrid_671813972145_slid__pgrid_158606130131_pgeo_9198997_x__adext__ptid_kwd-298815527262&gclid=Cj0KCQjwiuC2BhDSARIsALOVfBJLj5yQbnG6ahJs44-g7TyldQOnVPzFln_PeHm2sKX-fmVjUrjrUM0aAp50EALw_wcB&gclsrc=aw.ds",
        site: "primevideo"
    },
    {
        imagem: "https://lh5.googleusercontent.com/proxy/d_Fh60H1wbgYuqg208y320_2nCTWN8RXJzl6UhnReH162fGwiHMVizyWPxmK4kDx4Ir2CNWNNpux1nPHmY7dOOx-arGCOis0qrKsMw",
        titulo: "Scandal",
        descricao: "Uma série política que acompanha a vida de Olivia Pope, uma ex-assessora da Casa Branca que agora dirige uma empresa de gerenciamento de crises.",
        genero: ["Drama político"],
        link:"https://www.primevideo.com/-/pt/detail/Scandal/0HOLOPDWV1LFC0YYC3TB0GOC33",
        site: "primevideo"
    },
    {
        imagem: "https://m.media-amazon.com/images/M/MV5BMjQ4MjE1NzU5Nl5BMl5BanBnXkFtZTgwOTIwMzg5NjE@._V1_.jpg",
        titulo: "Private Practice",
        descricao: "Um spin-off de Grey's Anatomy, que acompanha a vida da Dra. Addison Montgomery em um consultório particular em Los Angeles.",
        genero: ["Drama"],
        link:"https://www.primevideo.com/-/pt/detail/Private-Practice/0LTQ8CA5754FLDGXUMCEOVT3HU",
         site: "primevideo"
    },
    {
        imagem: "https://upload.wikimedia.org/wikipedia/pt/d/db/How_to_Get_Away_with_Murder_Temporada_2_Poster.jpg",
        titulo: "How to Get Away with Murder",
        descricao: "Um thriller jurídico que acompanha a vida de uma professora de direito e seus alunos envolvidos em um assassinato.",
        genero: ["Drama", " Thriller jurídico"],
         link:"https://www.netflix.com/br/title/80024057?source=35",
         site: "netflix"
    },
    {
        imagem: "https://i.pinimg.com/736x/1c/4a/5b/1c4a5b12f6ad92521ec4f7c8a497e93d.jpg",
        titulo: "Station 19",
        descricao: "Um spin-off de Grey's Anatomy, que acompanha o dia a dia de um grupo de bombeiros em Seattle.",
        genero: ["Drama", " Ação", " Processual"],
        link:"https://www.primevideo.com/-/pt/detail/Station-19/0T1V1C9E5LQZN7P5WS1XSDE54U",
        site: "primevideo"
    },
    {
        imagem: "https://uauposters.com.br/media/catalog/product/8/9/896720221026-uau-posters-inventando-anna-series-2.jpg",
        titulo: "Inventando Anna",
        descricao: "Uma minissérie baseada em uma história real sobre uma golpista que enganou a alta sociedade de Nova York.",
        genero: ["Drama", " Crime"],
        link:"https://www.netflix.com/br/title/81008305?source=35",
        site: "netflix"
    },
    {
        imagem: "https://media.fstatic.com/L7VuvoT3-mcVTa_0Vez0x5tTy8k=/322x478/smart/filters:format(webp)/media/movies/covers/2023/08/1Opw4Qfiza2Uk5ENZgLWVmQyzoL.jpg",
        titulo: "Lei e Ordem",
        descricao: "A série original, que acompanha o processo de investigação e julgamento de crimes em Nova York.",
        genero: ["Drama policial", " Processual"],
        link: "https://www.primevideo.com/dp/amzn1.dv.gti.007ea183-bc6d-4e94-b3bd-79ac403b02eb?autoplay=0&ref_=atv_cf_strg_wb",
        site: "primevideo"
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCLjViygID7Pgl87OKL39g46asPgSDkRW6MA&s",
        titulo: "Lei e Ordem: Unidade de Vítimas Especiais",
        descricao: "Lei e Ordem: Unidade de Vítimas Especiais é uma das séries mais longas e aclamadas da franquia Lei e Ordem, criada por Dick Wolf. A série se concentra nos casos da Unidade de Vítimas Especiais (SVU) do Departamento de Polícia de Nova York, que investiga crimes sexuais, como estupro, abuso infantil e tráfico de pessoas.",
        genero: ["Drama policial", " Processual", " Crime"],
        link:"https://www.primevideo.com/dp/0P0WACROQDLWLGY0MK3AELB4JA?ref_=dvm_pds_tit_br_sw_s_g_mkw_sWV0O8lkFnR-dc&mrntrk=pcrid_671848978999_slid__pgrid_155395208800_pgeo_9198997_x__adext__ptid_kwd-301041101953&_mkw_sWV0O8lkFnR-dc&mrntrk=pcrid_671848978999_slid__pgrid_155395208800_pgeo_9198997_x__adext__ptid_kwd-301041101953&gclid=Cj0KCQjwiuC2BhDSARIsALOVfBIM0YYyXZ03EJgmy9p_QGcRAbWP2Kupe-C9esLZryXRUwVrSoIFp5gaArjIEALw_wcB&gclsrc=aw.ds",
        site: "primevideo"
    },
    {
        imagem: "https://i.pinimg.com/736x/76/11/73/76117302f81c16d8a1e0f4c5c1dcaef1.jpg",
        titulo: "Lei e Ordem: Criminal Intent",
        descricao: "Acompanha a Major Case Squad, uma unidade de elite que investiga crimes complexos, muitas vezes com foco em perfis psicológicos dos criminosos.",
        genero: ["Drama policial", " Processual", " Psicológico"],
        link: "https://www.primevideo.com/-/pt_PT/detail/Lei-Ordem-Crimes-Premeditados/0HKEUH42DYWOZEY2YEFUKCDZ27#:~:text=Prime%20Video%3A%20Lei%20%26%20Ordem%3A%20Crimes%20Premeditados",
        site: "primevideo"
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSipHXJMTlCfJ6rS4h6UwWpQSjOljQQt5-bFQ&s",
        titulo: "Lei e Ordem: Trial by Jury",
        descricao: "Foca no processo de julgamento, desde a seleção do júri até o veredito.",
        genero: ["Drama jurídico", " Processual"],
        link: "https://www.primevideo.com/-/pt/detail/Law-Order-Trial-by-Jury/0S3N82M3TPM7LI4HZP2DWQF24G#:~:text=Prime%20Video%3A%20Law%20%26%20Order%3A%20Trial%20by%20Jury%20Season%201",
        site: "primevideo"
    },
    {
        imagem: "https://m.media-amazon.com/images/M/MV5BOWE0ZGRkYmMtN2UzNy00MjU3LWJmMmQtZjNlZjIwOWM3OThjXkEyXkFqcGdeQXVyMTUyNjc3NDQ4._V1_.jpg",
        titulo: "Lei e Ordem: Los Angeles",
        descricao: "Versão da série ambientada em Los Angeles, com casos específicos da cidade.",
        genero: ["Drama policial", " Processual"],
        link:"https://www.primevideo.com/-/pt/detail/Law-Order-Los-Angeles/0JKQMRPW1PFGP2XNGW43WJNUD2", 
        site: "primevideo"
    },
    {
        imagem: "https://m.media-amazon.com/images/M/MV5BZmNhYWNkMzQtZGYwYi00ZWQ4LTk5NGQtMGE1MDkxNjBjNTllXkEyXkFqcGdeQXVyMTk3NDAwMzI@._V1_FMjpg_UX1000_.jpg",
        titulo: "Lei e Ordem: UK",
        descricao: "Adaptação britânica da série original, com casos e personagens próprios.",
        genero: ["Drama policial", " Processual"],
        link: "https://www.primevideo.com/-/pt/detail/Law-Order-UK/0N8PPJ0KE3E6QMAS6EE91F3YT6#:~:text=Prime%20Video%3A%20Law%20%26%20Order%3A%20UK",
        site: "primevideo"
    },
    {
        imagem: "https://br.web.img3.acsta.net/pictures/17/08/02/09/53/130108.jpg",
        titulo: "Lei e Ordem: True Crime",
        descricao: "Antologia que recria casos reais, apresentando um novo caso a cada temporada.",
        genero: ["Antologia", " Crime", " Ação"],
        link:"https://www.primevideo.com/-/pt/detail/Law-Order-True-Crime-the-Menendez-Murders/0JC99P2TDCWE2B9VIFNTHS1Y8U#:~:text=Prime%20Video%3A%20Law%20%26%20Order%20True,the%20Menendez%20Murders%2C%20Season%201", 
        site: "primevideo"
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1qsSP-nJwJscVO6ZJPB504vdgD8ISwxQUnoHRwuokkbAXN0zumFxi4F1zvncWFXwkGg4&usqp=CAU",
        titulo: "Lei e Ordem: Organized Crime",
        descricao: "Um spin-off de SVU, que acompanha a luta contra o crime organizado em Nova York.",
        genero: ["Drama policial", " Crime", " Ação"],
        link: "https://www.primevideo.com/-/pt/detail/Law-Order---Crime-Organizado/0U66A36ZPATG1SA7EZ7IYV7BN1", 
        site: "primevideo"
    },
    {
        imagem: "https://images.justwatch.com/poster/304461291/s718/temporada-1.jpg",
        titulo: "Origem",
        descricao: "Uma cidade isolada e aterrorizante prende um grupo de estranhos, que devem lutar para sobreviver a criaturas misteriosas que surgem à noite.",
        genero: ["Terror", "Mistério", "Drama"],
        link:"https://globoplay.globo.com/origem/t/t89f1QshQP/?origemId=91698",
        site: "globoplay"
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGDkz2pFLsGz5GeohepaePwwtaPLlzKPGKPg&s",
        titulo: "Friends",
        descricao: "Friends é um fenômeno da televisão que marcou uma geração inteira. Essa sitcom norte-americana, que acompanha a vida de seis amigos em Nova York, conquistou o público mundial com sua combinação de humor, drama e personagens cativantes",
        genero: ["Comédia", "Amizade","Drama"],
        link: "https://www.primevideo.com/detail/amzn1.dv.gti.2d7e70ad-71b7-4256-949e-0a6fe0ec1d86?ref_=dvm_pds_tit_br_sw_c_g_mkw_sS32wklGF-dc_pcrid_663866266035&mrntrk=slid__pgrid_151081078495_pgeo_9198997_x__adext__ptid_kwd-49341921&gclid=Cj0KCQjwiuC2BhDSARIsALOVfBL0u0rzumV3BqPG9dTc317FyGqAltxBrViWMvOsxUPhsh7xvUVQStEaAjT2EALw_wcB", 
        site: "primevideo"
    }
];
