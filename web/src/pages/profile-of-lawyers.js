import React from 'react'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import lai from '../images/lawyers/lai.jpg'
import kenneth from '../images/lawyers/kenneth.jpg'
import serena from '../images/lawyers/serena.jpg'
import ernest from '../images/lawyers/ernest.jpg'
import ranvir from '../images/lawyers/ranvir.jpg'
import nazim from '../images/lawyers/nazim.jpg'
import clarence from '../images/lawyers/clarence.jpg'
import yoongnc from '../images/lawyers/yoongnc.jpg'
import eric from '../images/lawyers/eric.jpg'
import leonard from '../images/lawyers/leonard.jpg'
import tri from '../images/lawyers/tri.png'
import connie from '../images/lawyers/connie.jpg'

import $ from 'jquery';

const warrantyRequestPage = props => {
  const isBrowser = () => typeof window !== "undefined"

  var mob = Boolean(v < 600);
  if (isBrowser()) {
    var v = $(window).width();
    var mob = Boolean(v < 600);
    console.log(mob);
    $(document).ready(function () {
      $('#l1').click(function () {
        if (mob == true) {
          $('#open1mob').slideToggle("slow");
        }
        else {
          $('#open2').slideUp("slow");
          $('#open4').slideUp("slow");
          $('#open3').slideUp("slow");
          $('#open5').slideUp("slow");
          $('#tri5').slideUp("slow");
          $('#tri2').slideUp("slow");
          $('#tri3').slideUp("slow");
          $('#tri4').slideUp("slow");
          $('#open1').slideToggle("slow");
          $('#tri1').slideToggle("slow");

        }
      });
      $('#l2').click(function () {
        if (mob == true) {
          $('#open2mob').slideToggle("slow");
        }
        else {
          $('#open1').slideUp("slow");
          $('#open4').slideUp("slow");
          $('#open3').slideUp("slow");
          $('#open5').slideUp("slow");
          $('#tri1').slideUp("slow");
          $('#tri5').slideUp("slow");
          $('#tri3').slideUp("slow");
          $('#tri4').slideUp("slow");
          $('#open2').slideToggle("slow");
          $('#tri2').slideToggle("slow");

        }
      });
      $('#l3').click(function () {
        if (mob == true) {
          $('#open3mob').slideToggle("slow");
        }
        else {
          $('#open2').slideUp("slow");
          $('#open4').slideUp("slow");

          $('#open1').slideUp("slow");
          $('#open5').slideUp("slow");
          $('#tri1').slideUp("slow");
          $('#tri2').slideUp("slow");
          $('#tri5').slideUp("slow");
          $('#tri4').slideUp("slow");
          $('#open3').slideToggle("slow");
          $('#tri3').slideToggle("slow");

        }
      });
      $('#l4').click(function () {
        if (mob == true) {
          $('#open4mob').slideToggle("slow");
        }
        else {
          $('#open1').slideUp("slow");
          $('#open2').slideUp("slow");
          $('#open3').slideUp("slow");
          $('#open5').slideUp("slow");
          $('#tri1').slideUp("slow");
          $('#tri2').slideUp("slow");
          $('#tri3').slideUp("slow");
          $('#tri5').slideUp("slow");
          $('#open4').slideToggle("slow");
          $('#tri4').slideToggle("slow");

        }
      });
      $('#l5').click(function () {
        if (mob == true) {
          $('#open5mob').slideToggle("slow");
        }
        else {
          $('#open2').slideUp("slow");
          $('#open4').slideUp("slow");

          $('#open3').slideUp("slow");
          $('#open1').slideUp("slow");
          $('#tri1').slideUp("slow");
          $('#tri2').slideUp("slow");
          $('#tri3').slideUp("slow");
          $('#tri4').slideUp("slow");
          $('#open5').slideToggle("slow");
          $('#tri5').slideToggle("slow");

        }
      });
      $('#l6').click(function () {
        if (mob == true) {
          $('#open6mob').slideToggle("slow");
        }
        else {
          $('#open7').slideUp("slow");
          $('#open8').slideUp("slow");

          $('#open9').slideUp("slow");
          $('#open10').slideUp("slow");
          $('#tri10').slideUp("slow");
          $('#tri7').slideUp("slow");
          $('#tri8').slideUp("slow");
          $('#tri9').slideUp("slow");
          $('#open6').slideToggle("slow");
          $('#tri6').slideToggle("slow");

        }
      });
      $('#l7').click(function () {
        if (mob == true) {
          $('#open7mob').slideToggle("slow");
        }
        else {
          $('#open6').slideUp("slow");
          $('#open8').slideUp("slow");

          $('#open9').slideUp("slow");
          $('#open10').slideUp("slow");
          $('#tri6').slideUp("slow");
          $('#tri10').slideUp("slow");
          $('#tri8').slideUp("slow");
          $('#tri9').slideUp("slow");
          $('#open7').slideToggle("slow");
          $('#tri7').slideToggle("slow");

        }
      });
      $('#l8').click(function () {
        if (mob == true) {
          $('#open8mob').slideToggle("slow");
        }
        else {
          $('#open6').slideUp("slow");
          $('#open7').slideUp("slow");

          $('#open9').slideUp("slow");
          $('#open10').slideUp("slow");
          $('#tri6').slideUp("slow");
          $('#tri7').slideUp("slow");
          $('#tri10').slideUp("slow");
          $('#tri9').slideUp("slow");
          $('#open8').slideToggle("slow");
          $('#tri8').slideToggle("slow");

        }
      });
      $('#l9').click(function () {
        if (mob == true) {
          $('#open9mob').slideToggle("slow");
        }
        else {
          $('#open6').slideUp("slow");
          $('#open7').slideUp("slow");

          $('#open8').slideUp("slow");
          $('#open10').slideUp("slow");
          $('#tri6').slideUp("slow");
          $('#tri7').slideUp("slow");
          $('#tri8').slideUp("slow");
          $('#tri10').slideUp("slow");
          $('#open9').slideToggle("slow");
          $('#tri9').slideToggle("slow");

        }
      });
      $('#l10').click(function () {
        if (mob == true) {
          $('#open10mob').slideToggle("slow");
        }
        else {
          $('#open6').slideUp("slow");
          $('#open7').slideUp("slow");

          $('#open8').slideUp("slow");
          $('#open9').slideUp("slow");
          $('#tri6').slideUp("slow");
          $('#tri7').slideUp("slow");
          $('#tri8').slideUp("slow");
          $('#tri9').slideUp("slow");

          $('#open10').slideToggle("slow");
          $('#tri10').slideToggle("slow");

        }

      });
      $('#l11').click(function () {
        if (mob == true) {
          $('#open11mob').slideToggle("slow");
        }
        else {
          $('#open12').slideUp("slow");
          $('#tri12').slideUp("slow");
          $('#open13').slideUp("slow");
          $('#tri13').slideUp("slow");
          $('#open11').slideToggle("slow");
          $('#tri11').slideToggle("slow");

        }
      });
      $('#l12').click(function () {
        if (mob == true) {
          $('#open12mob').slideToggle("slow");
        }
        else {
          $('#open11').slideUp("slow");
          $('#tri11').slideUp("slow");
          $('#open13').slideUp("slow");
          $('#tri13').slideUp("slow");
          $('#open12').slideToggle("slow");
          $('#tri12').slideToggle("slow");

        }
      });
      $('#l13').click(function () {
        if (mob == true) {
          $('#open13mob').slideToggle("slow");
        }
        else {
          $('#open11').slideUp("slow");
          $('#tri11').slideUp("slow");
          $('#open12').slideUp("slow");
          $('#tri12').slideUp("slow");
          $('#open13').slideToggle("slow");
          $('#tri13').slideToggle("slow");

        }
      });
    });
  }

  function showoverlay(num) {
    if (mob == true) {
      console.log('#open' + num + 'mob');
      $('#open' + num + 'mob').slideUp("slow");
      $('#tri11'+num +'mob').slideUp("slow");
    }
    else {
      $('#open' + num).slideUp("slow");
      $('#tri'+num).slideUp("slow");
    }
  }
  return (
    <Layout>
      <SEO title="Profile of Lawyers" />
      <div class="installclasswrap">

        <div class="installclass" style={{ marginTop: 0.5 + 'em' }}>
          <div class="install">
            <img class="installimg" id="l2" height="3024" width="3024" src={lai} alt="portomono installation guide" />
            <img src={tri} id="tri2" class="tri" alt="portomono installation guide" />

          </div>
          <div class="open" id="open2mob">
            <div class="inner">
              <div class="inner11">

                <div class="position">
                  Lai Swee Fung<br />
                  Consultant<br />
                </div>
                <div class="btnmob">
                  <button class="crossmob" onClick={showoverlay.bind(null, "2")} >
                    &#215;
                  </button>
                </div>
              </div>
              <div class="wrapper">
                <div class="left">
                  Email: <a href="mailto:lai@unilegal.com.sg">lai@unilegal.com.sg</a><br />
                          Tel: <a href="tel:+6562362949">+65 6236 2949</a>
                  <br />
                          Tel: <a href="tel:+6562362983">+65 6236 2983</a>
                </div>
                <div class="right">
                  Swee Fung graduated from the National University of Singapore in August 1984. He was admitted as an Advocate & Solicitor to the Singapore Bar in February 1985. Since then, he has been involved in continuous professional legal practice in Singapore for more than 35 years. He has built up a reservoir of deep and wide knowledge in the practice of law.<br /><br />
                He has been involved in numerous civil litigation and arbitration cases, many of which are often cited as legal precedents and are reported in the Singapore Law Reports. His involvement in the numerous litigation cases includes commercial, construction, family, estate, property, conveyancing and other matters. In addition, in the various situations of conflict or dispute, whether the issues are relating to sale of goods or services, trust, company law, property, etc, he has always been closely involved in the dispute management process, advising where appropriate on avenues to avoid litigation (alternative dispute resolution and/or mediation) as well as litigating when we have to, in the Courts or via arbitration.<br /><br />
                Swee Fung’s vast experience includes having acted on a regular basis for and advised numerous clients in matters that were mediated, arbitrated and/or litigated, in the appropriate forums including the apex courts of Singapore (The High Court and the Court of Appeal, Singapore).<br /><br />
                As part of his belief in life-long learning, he had pursued further education and obtained a Masters of Business Administration (for Asia Pacific Executives) from National University of Singapore in 1999 and he regularly updates himself on the latest up-to-date knowledge so as to provide the best and excellent advice to his clients. His knowledge and skills therefore straddle many areas other than just purely the legal realm and he is able to often perceive and provide a more complete and holistic view of matters.<br /><br />
                Swee Fung is an able initiator and makes things happen. He is a Founding Director of UniLegal LLC which he co-founded on 1 August 2001. Prior to that, he was a Senior Partner of two other law firms. He is also admitted as an Advocate & Solicitor in the Malaysian Bar (although he has since ceased practice there). As a sign of his maturity and strength, he remains the most senior director in UniLegal LLC and he has been with the law corporation since two (2) decades ago.<br /><br />
                The following are some of the cases in the High Court or Court of Appeal in Singapore in which Lai Swee Fung has acted in:-<br /><br />


                Heinrich Pte Ltd and another v Lau Kim Huat and others<br />
                [2016] SGHC 116
                <br /><br />
                Tan Chwee Chye and others v P V R M Kulandayan Chettiar<br />
                [2006] 1 SLR(R) 229; [2005] SGHC 203
                <br /><br />
                Chan Yuen Lan v See Fong Mun<br />
                [2014] 3 SLR 1048; [2014] SGCA 36
                <br /><br />
                See Fong Mun v Chan Yuen Lan<br />
                [2013] 3 SLR 685; [2013] SGHC 99
                <br /><br />
                Ng Siok Poh (administratrix of the estate of Lim Lian Chiat, deceased) and another v Sim Lian-Koru Bena JV Pte Ltd<br />
                [2018] 4 SLR 731; [2017] SGHC 231
                <br /><br />
                National Foods Ltd v Pars Ram Brothers (Pte) Ltd<br />
                [2007] 2 SLR(R) 1048; [2007] SGCA 23
                <br /><br />
                National Foods Ltd v Pars Ram Brothers (Pte) Ltd<br />
                [2006] 4 SLR(R) 640; [2006] SGHC 173
                <br /><br />
                N K Rajarh and others v Tan Eng Chuan and others<br />
                [2014] 1 SLR 694; [2013] SGCA 62
                <br /><br />
                N K Rajarh and others v Tan Eng Chuan and others<br />
                [2013] 3 SLR 103; [2013] SGHC 76
                <br /><br />
                Chi Liung Holdings Sdn Bhd v Attorney-General<br />
                [1994] 2 SLR(R) 314; [1994] SGCA 68
                <br /><br />
                Chi Liung Holdings Sdn Bhd v Attorney-General<br />
                [1993] 1 SLR(R) 708; [1993] SGHC 95
                <br /><br />
                Development Bank of Singapore Ltd v Eng Keong Realty Pte Ltd and another<br />
                [1990] 1 SLR(R) 265; [1990] SGHC 21
                <br /><br />
                Development Bank of Singapore Ltd v Eng Keong Realty Pte Ltd & Anor<br />
                [1990] 3 MLJ 89
                <br /><br />
                Lee Seng Eder v Wee Kim Chwee and others<br />
                [2014] 2 SLR 56; [2013] SGHC 287
                <br /><br />
                Lee Seng Eder v Wee Kim Chwee and others<br />
                [2015] SGHCR 02
                <br /><br />
                Ng Guat Hua v Onestoneinvest Pte Ltd and Others<br />
                [2008] SGHC 156
                <br /><br />
                Nylect Engineering Pte Ltd v BKB Engineering Constructions Pte Ltd and Another<br />
                [2004] SGHC 245
                <br /><br />
                TEC v TED<br />
                [2015] SGFC 93
                <br /><br />
                UEY v UEZ<br />
                [2017] SGFC 108
                <br /><br />
                TEK v TEL<br />
                [2015] SGFC 117
                <br /><br />
                BC v BD (BE, Third Party)<br />
                [2004] SGDC 99
                <br /><br />
                Leong Yoke Wah v Lam Lan<br />
                [2006] SGDC 175
                <br /><br />
                Re Wan Yijun and another<br />
                [1990] 2 SLR(R) 157; [1990] SGHC 65
                <br /><br />
                OP v OQ
                [2006] SGDC 72
                <br /><br />
                Law Society of Singapore v Tham Kok Leong Thomas<br />
                [2006] 1 SLR(R) 775; [2005] SGHC 231
                <br /><br />
                Pacific Rim Investments Pte Ltd v Lam Seng Tiong and another<br />
                [1995] 2 SLR(R) 643; [1995] SGCA 58
                <br /><br />
                Lam Seng Tiong and another v Pacific Rim Investments Pte Ltd<br />
                [1994] 3 SLR(R) 387; [1994] SGHC 232
                <br /><br />
                Wardley Ltd v Datin Chong Mooi Lan and another (administratrix and administrator of the estate of Dato Tong Lee Hwa, deceased)<br />
                [1993] 1 SLR(R) 469; [1993] SGCA 17
                <br /><br />
                Chea Teng Kim v The Wing On Fire & Marine Insurance Co Ltd & Anor<br />
                [1992] SGHC 248
                <br /><br />
                Chea Teng Kim trading as Chea Kim Heng Jewellery v The Wing On Fire & Marine Insurance Co Ltd and Another<br />
                [1992] SGHC 144
                <br /><br />
                The Official Assignee of The Estate of Teo Hia Khoon, a bankrupt and Others v Toh Soo Meng<br />
                [1998] SGHC 415
                <br /><br />
                Newtech Engineering Construction Pte Ltd v BKB Engineering Constructions Pte Ltd and others<br />
                [2003] 4 SLR(R) 73; [2003] SGHC 141
                <br /><br />
                Bayerische Landesbank Girozentrale v Teh Li Li<br />
                [2000] 3 SLR(R) 345; [2000] SGHC 203
                <br /><br />

                Wong Kai Wah v Wong Kai Yuan and another<br />
                [2014] SGHC 147
                <br /><br />
                Hamid Marine Services & Engrg Pte Ltd v Foo Siew Wei and others<br />
                [2020] SGHC 190
                <br /><br />
                Choo Ah Sam v Kieu Ka Tong and another<br />
                [2020] SGHC 62
                <br /><br />
                Containers Printers Pte Ltd v Christopher Tan and Another<br />
                [1997] SGHC 273
                <br /><br />
                Panwah Steel Private Limited v DTG & Co Pte Ltd<br />
                [2010] SGDC 150
                <br /><br />
                Exxonmobil Asia Pacific Pte Ltd v Bombay Dyeing & Manufacturing Co Ltd<br />
                [2007] SGHC 137
                <br /><br />
                OCBC Wearnes & Walden Investments (Singapore) Limited and Others v Goh Shon Hai (Computer Measurement (S) Pte Ltd, Third Party)<br />
                [1999] SGHC 164
                <br /><br />
                Chong Hor Yong trading as Jackie's Shoes Comapny v Chik Chun Wing trading as Tenlead Industrial & Commerce<br />
                [1995] SGHC 26
                <br /><br />
                Jade Alliance Pte Ltd v Donald Mcarthy Pte Ltd<br />
                [2004] SGDC 173

</div>
              </div>
            </div>
          </div>
          <div class="install">
            <img class="installimg" id="l1" height="3024" width="3024" src={ranvir} alt="portomono installation guide" />
            <img src={tri} id="tri1" class="tri" alt="portomono installation guide" />

          </div>
          <div class="open" id="open1mob">
            <div class="inner">
              <div class="inner11">

                <div class="position">
                  Ranvir Kumar Singh<br />
                  Director<br />
                </div>
                <div class="btnmob">
                  <button class="crossmob" onClick={showoverlay.bind(null, "1")} >
                    &#215;
                  </button>
                </div>
              </div>

              <div class="wrapper">
                <div class="left">
                  Email: <a href="mailto:ranvir.kumar@unilegal.com.sg">ranvir.kumar@unilegal.com.sg</a><br />
                          Tel: <a href="tel:+6562362434">+65 6236 2434</a>
                  <br />
                          Tel: <a href="tel:+6562362436">+65 6236 2436</a>
                  <br />
                          Tel: <a href="tel:+656236 2430">+65 6236 2430</a>
                </div>
                <div class="right">
                  Ranvir obtained LLB (Hons) from National University of Singapore and LLM from King’s College London. Also obtained Diploma in International Arbitration from Chartered Institute of Arbitrators (UK) and Graduate Diploma in Financial Management from Singapore Institute of Management.
                <br /><br />
                Admitted to Singapore Bar in 1985 and has been in private practice ever since handling a wide spectrum of legal matters. Frequently appears as counsel in local courts. Increasingly involved in litigation abroad and has been involved in litigation in Australia, India, Indonesia, People’s Republic of China, Philippines, Thailand, Malaysia and New Zealand.
                <br /><br />
                Has been lead counsel in a number of large and complicated cases and has  argued cases in superior courts in Singapore, International Court of Arbitration of ICC, Singapore International Arbitration Centre and Hong Kong International Arbitration Centre.
                <br /><br />
                Fluent in English, Malay and Hindi. Conversant in Mandarin and in some Chinese dialects. Active in social and community work and holds key positions in several charitable organisations.

                                     </div></div>
            </div>
          </div>

          <div class="install">
            <img class="installimg" id="l3" height="3024" width="3024" src={yoongnc} alt="portomono installation guide" />
            <img src={tri} id="tri3" class="tri" alt="portomono installation guide" />

          </div>
          <div class="open" id="open3mob">
            <div class="inner">
              <div class="inner11">
                <div class="position">
                  Yoong Nim Chor<br />
                  Director<br />
                </div>
                <div class="btnmob">
                  <button class="crossmob" onClick={showoverlay.bind(null, "3")} >
                    &#215;
                  </button>
                </div>
              </div>

              <div class="wrapper">
                <div class="left">
                  Email: <a href="mailto:yoongnc@unilegal.com.sg">yoongnc@unilegal.com.sg</a><br />
                          Tel: <a href="tel:+6562362432">+65 6236 2432</a>
                  <br />
                          Tel: <a href="tel:+6598180268">+65 9818 0268</a>
                </div>
                <div class="right">
                  Nim Chor holds a LL.B. (Hons) (Second Class Upper Division) conferred by the National University of Singapore in 1981. He is admitted to as an Advocate & Solicitor (Supreme Court of Singapore) in 1982, an Advocate & Solicitor (High Court of Malaya, Malaysia) in 1994, and a Solicitor (England & Wales) in 1995. Nim Chor is practises as a Consultant of UniLegal LLC (as an Advocate & Solicitor of Singapore), and contemporaneously as Senior Partner of Malaysian law firm Yoong & Partners (as an Advocate & Solicitor of Malaysia).
                          <br /><br />
                          He has practised with eminent City of London law firm Freshfields (now known as Freshfields Bruckhaus Deringer) in their Singapore and London offices. Nim Chor also co-founded prominent Singapore law firms Wong, Yoong, Tan & Molly Lim and Wong Partnership, and went on to set up Yoong & Partners. He has headed the Corporate & Securities Department of KhattarWong LLP before becoming a Consultant with UniLegal. His experience spans matters and transactions in Singapore, Malaysia as well as cross-border transactions in most ASEAN countries, Hong Kong, China, United Kingdom, United States, India and Switzerland.
                          <br /><br />
                          He practices especially in the areas of Corporate, Securities and Finance laws, both as a solicitor and as an advocate. He advises on and works closely with clients in structuring transactions and deals, drafting of relevant agreements and related documents, and legal aspects of completion and implementation. In addition, in situations of conflict or dispute, he has been closely involved in the dispute management process, advising where appropriate on avenues to avoid litigation as well as litigation in the Courts or via arbitration when necessary. Uniquely for a specialist in the areas of Corporate, Securities and Finance laws, Nim Chor has - in those areas - acted for clients and has appeared for clients in the apex courts of both Singapore (The Court of Appeal, Singapore) and Malaysia (The Federal Court, Malaysia). A number of the Court cases on which he has acted are reported as authorities on points of law in Law Reports.
                          <br /><br />
Nim Chor's vast experience includes having acted and advised on Initial Public Offerings of shares (including being the principal partner in listings in Singapore and in Malaysia), bond and other transferable instruments issues, mergers and acquisitions, company, joint venture and commercial transactions, investments and holdings in securities and specific industries in Singapore, Malaysia and other countries, and acquisitions, disposals and derivatives involving personal assets and real property. An area where he has a particularly long and successful record relates to the calling, agenda, regulatory compliances and processes, and conduct of Extraordinary General Meetings of companies listed in Singapore as well as in Malaysia, not least when there is an element of disagreement or dispute in respect of the outcomes. Of late, Nim Chor has also advised on the legal ramifications of cryptocurrencies and Initial Coin Offerings of cryptocurrencies.</div>
              </div>
            </div>
          </div>
          <div class="install">
            <img class="installimg" id="l4" height="3024" width="3024" src={nazim} alt="portomono installation guide" />
            <img src={tri} id="tri4" class="tri" alt="portomono installation guide" />

          </div>
          <div class="open" id="open4mob">
            <div class="inner">
              <div class="inner11">
                <div class="position">
                  Nazim Khan<br />
                  Director<br />
                </div>
                <div class="btnmob">
                  <button class="crossmob" onClick={showoverlay.bind(null, "4")} >
                    &#215;
                  </button>
                </div>
              </div>

              <div class="wrapper">
                <div class="left">
                  Email: <a href="mailto:nazim.khan@unilegal.com.sg">nazim.khan@unilegal.com.sg</a><br />
                          Tel: <a href="tel:+6562362939">+65 6236 2939</a>
                  <br />
                          Tel: <a href="tel:+6562362932">+65 6236 2932</a>
                </div>
                <div class="right">
                  Nazim graduated from the University of London with an LLB Hons in June 1989. He was admitted as a Barrister to the Bar in England & Wales in July 1990 and was admitted as an Advocate & Solicitor in Singapore in January 1992.<br />
                Nazim specialises in high value Commercial Litigation and undertakes advisory and advocacy work in the Singapore Courts and in Domestic and International Arbitrations. As of January 2021, he has 29 years of experience in complex corporate and commercial litigation. <br /><br />
                Examples of cases he recently handled as lead counsel include:-<br />
                  <ul>
                    <li>acting for a former Goldman Director relating to the 1MDB saga in relation to CMSA charges in Malaysia and as they relate to Singapore;</li>
                    <li>acting for a Counterparty in the Hin Leong/Ocean Tanker (in excess of US$50 million) matter relating to white collar issues;</li>
                    <li>acting for private equity investor in relation to a negligence action against an offshore bank in an acquisition of an oil rig (value US$6 million);</li>
                    <li>	acting in complex Misrepresentation actions;</li>
                    <li>	acting for a GIP Fund in claims by its preference shareholders against the Fund and subsequently acting for the Directors in claims against them for breach of fiduciary duties (S$40 million);</li>
                    <li>	acting for a substantial unitholder of a REIT in Singapore comprising 18 US hotels originally valued at US$1.2 billion and dealing with issues relating to an EOGM, the MAS and the Trustee;</li>
                    <li>	acting for a Co-Administrator in removing another Administrator resulting in a Settlement of S$22 million;</li>
                    <li>	acting for the Special Committee of a local listed company in relation to investigating allegation of overseas bribery;</li>
                    <li>	claims in the High Court relating to shares in a listed company involving breach of moratorium;</li>
                    <li>	acting for a large Philippines company against an offshore bank in relation to a wrongful call on a standby letter of credit; and</li>
                    <li>	acting for Receiver & Managers and Judicial Managers in relation to Construction Companies.</li>
                  </ul>
                  <br />
                                      Nazim has experience in the following areas:-
                                      <ul>
                    <li>	Matters relating to Companies & Corporations including derivative actions, minority oppression, breach of director’s duties, financial assistance, breaches of various provisions under the Act, Insolvency, Judicial Management, Corporate Receivership and Restructuring;</li>
                    <li>	Letters of Credit, Standby Letters of Credit, Guarantees and Performance Bonds;</li>
                    <li>	Banking Litigation;</li>
                    <li>	Tortious claims and Economic Torts;</li>
                    <li>	Defamation;</li>
                    <li>	Disputes on assets and matters arising from Probate and Letters of Administration including cross-jurisdictional disputes;</li>
                    <li>	Professional Negligence;</li>
                    <li>	Construction related disputes, infrastructure projects and Power Plants (cross-jurisdictional) - domestic and international arbitration;</li>
                    <li>	Personal Debt Restructuring for owners in Corporate Insolvencies including Voluntary Arrangements.</li>
                  </ul>
                  Several of the cases he has done has been reported. Nazim also has experience in corporate agreements, mergers and acquisitions, sale and purchase of shares in companies and businesses and other varieties and permutations of agreements.<br />
                Nazim works with his own team of 3 others. He is also able to put together a bigger team from members within UniLegal LLC comprising of different specialist backgrounds and practitioners outside depending on the value and size of each case and/or deal. Nazim very often works with lawyers and counsel from other jurisdictions in cross-jurisdictional matters and is able to tap on his network for this.<br />
                Over the years he has also advised High Net Worth Individuals (“HNWIs”) and Entrepreneurs on their personal and business legal issues.<br /><br />
                He may be contacted as follows:-<br />
                Telephone:&nbsp;<a href="tel:+6562362939">+65 6236 2939</a><br />
                Email:&nbsp;&nbsp;<a href="mailto:nazim.khan@unilegal.com.sg">nazim.khan@unilegal.com.sg</a> <br />
                Secretary email:&nbsp;<a href="mailto:suhaimi@unilegal.com.sg">suhaimi@unilegal.com.sg</a><br />
                A fuller curriculum vitae can be provided upon request.<br />
                </div></div>
            </div>
          </div>
          <div class="install">
            <img class="installimg" id="l5" height="3024" width="3024" src={clarence} alt="portomono installation guide" />
            <img src={tri} id="tri5" class="tri" alt="portomono installation guide" />

          </div>
          <div class="open" id="open5mob">
            <div class="inner">
              <div class="inner11">

                <div class="position">
                  Clarence Tan<br />
                  Director<br />
                </div>
                <div class="btnmob">
                  <button class="crossmob" onClick={showoverlay.bind(null, "5")} >
                    &#215;
                  </button>
                </div>
              </div>

              <div class="wrapper">
                <div class="left">
                  Email: <a href="mailto:ckltan@unilegal.com.sg">ckltan@unilegal.com.sg</a><br />
                          Tel: <a href="tel:+6562362950">+65 6236 2950</a>
                </div>
                <div class="right">
                  Clarence Tan is Director at UniLegal LLC and specialises in family, civil and commercial litigation, landlord and tenant, insolvency and bankruptcy, Strata Titles Board and Court of Appeal work.
                          <br /><br />
                          Over the years, Clarence has developed a personal approach to practicing law, believing in journeying with his clients and working closely with them to ensure amicable and practical solutions to their cases. His belief in "litigating with humour" has helped him establish strong relationships within the legal fraternity and with his clients, many of whom he still calls friends today.
                          <br /><br />
                          Clarence graduated from the University of Leeds in 1992 and was admitted to Lincoln's Inn in 1995. He was called to the Singapore Bar in 1997 and remains in practice. He is a member of the Law Society of Singapore and Singapore Academy of Law.
                          <br /><br />
Clarence is also a self-professed handyman who loves to tinker with cars, watches, bicycles and anything else he can get his hands on, including his golfing equipment. He loves a game of golf and represents the Law Society in golf in its annual Bar and Bench Games. He currently maintains a single handicap in golf, which he attributes to luck. </div>
</div>
            </div>
          </div>
        </div>

        <div class="open" id="open1">
          <button class="cross" onClick={showoverlay.bind(null, "1")} >
            &#215;
                  </button>
          <div class="inner">
            <div class="position">
              Ranvir Kumar Singh<br />
                  Director<br />
            </div>
            <div class="wrapper">
              <div class="left">
                Email: <a href="mailto:ranvir.kumar@unilegal.com.sg">ranvir.kumar@unilegal.com.sg</a><br />
                          Tel: <a href="tel:+6562362434">+65 6236 2434</a>
                <br />
                          Tel: <a href="tel:+6562362436">+65 6236 2436</a>
                <br />
                          Tel: <a href="tel:+656236 2430">+65 6236 2430</a>

              </div>
              <div class="right">
                Ranvir obtained LLB (Hons) from National University of Singapore and LLM from King’s College London. Also obtained Diploma in International Arbitration from Chartered Institute of Arbitrators (UK) and Graduate Diploma in Financial Management from Singapore Institute of Management.
                <br /><br />
                Admitted to Singapore Bar in 1985 and has been in private practice ever since handling a wide spectrum of legal matters. Frequently appears as counsel in local courts. Increasingly involved in litigation abroad and has been involved in litigation in Australia, India, Indonesia, People’s Republic of China, Philippines, Thailand, Malaysia and New Zealand.
                <br /><br />
                Has been lead counsel in a number of large and complicated cases and has  argued cases in superior courts in Singapore, International Court of Arbitration of ICC, Singapore International Arbitration Centre and Hong Kong International Arbitration Centre.
                <br /><br />
                Fluent in English, Malay and Hindi. Conversant in Mandarin and in some Chinese dialects. Active in social and community work and holds key positions in several charitable organisations.

                                            </div></div>
          </div>
        </div>
        <div class="open" id="open2">
          <button class="cross" onClick={showoverlay.bind(null, "2")} >
            &#215;
                  </button>
          <div class="inner">
            <div class="position">
              Lai Swee Fung<br />
                  Director<br />
            </div>
            <div class="wrapper">
              <div class="left">
                Email: <a href="mailto:lai@unilegal.com.sg">lai@unilegal.com.sg</a><br />
                          Tel: <a href="tel:+6562362949">+65 6236 2949</a>
                <br />
                          Tel: <a href="tel:+6562362983">+65 6236 2983</a>
              </div>
              <div class="right">
                Swee Fung graduated from the National University of Singapore in August 1984. He was admitted as an Advocate & Solicitor to the Singapore Bar in February 1985. Since then, he has been involved in continuous professional legal practice in Singapore for more than 35 years. He has built up a reservoir of deep and wide knowledge in the practice of law.<br /><br />
                He has been involved in numerous civil litigation and arbitration cases, many of which are often cited as legal precedents and are reported in the Singapore Law Reports. His involvement in the numerous litigation cases includes commercial, construction, family, estate, property, conveyancing and other matters. In addition, in the various situations of conflict or dispute, whether the issues are relating to sale of goods or services, trust, company law, property, etc, he has always been closely involved in the dispute management process, advising where appropriate on avenues to avoid litigation (alternative dispute resolution and/or mediation) as well as litigating when we have to, in the Courts or via arbitration.<br /><br />
                Swee Fung’s vast experience includes having acted on a regular basis for and advised numerous clients in matters that were mediated, arbitrated and/or litigated, in the appropriate forums including the apex courts of Singapore (The High Court and the Court of Appeal, Singapore).<br /><br />
                As part of his belief in life-long learning, he had pursued further education and obtained a Masters of Business Administration (for Asia Pacific Executives) from National University of Singapore in 1999 and he regularly updates himself on the latest up-to-date knowledge so as to provide the best and excellent advice to his clients. His knowledge and skills therefore straddle many areas other than just purely the legal realm and he is able to often perceive and provide a more complete and holistic view of matters.<br /><br />
                Swee Fung is an able initiator and makes things happen. He is a Founding Director of UniLegal LLC which he co-founded on 1 August 2001. Prior to that, he was a Senior Partner of two other law firms. He is also admitted as an Advocate & Solicitor in the Malaysian Bar (although he has since ceased practice there). As a sign of his maturity and strength, he remains the most senior director in UniLegal LLC and he has been with the law corporation since two (2) decades ago.<br /><br />
                The following are some of the cases in the High Court or Court of Appeal in Singapore in which Lai Swee Fung has acted in:-<br /><br />


                Heinrich Pte Ltd and another v Lau Kim Huat and others<br />
                [2016] SGHC 116
                <br /><br />
                Tan Chwee Chye and others v P V R M Kulandayan Chettiar<br />
                [2006] 1 SLR(R) 229; [2005] SGHC 203
                <br /><br />
                Chan Yuen Lan v See Fong Mun<br />
                [2014] 3 SLR 1048; [2014] SGCA 36
                <br /><br />
                See Fong Mun v Chan Yuen Lan<br />
                [2013] 3 SLR 685; [2013] SGHC 99
                <br /><br />
                Ng Siok Poh (administratrix of the estate of Lim Lian Chiat, deceased) and another v Sim Lian-Koru Bena JV Pte Ltd<br />
                [2018] 4 SLR 731; [2017] SGHC 231
                <br /><br />
                National Foods Ltd v Pars Ram Brothers (Pte) Ltd<br />
                [2007] 2 SLR(R) 1048; [2007] SGCA 23
                <br /><br />
                National Foods Ltd v Pars Ram Brothers (Pte) Ltd<br />
                [2006] 4 SLR(R) 640; [2006] SGHC 173
                <br /><br />
                N K Rajarh and others v Tan Eng Chuan and others<br />
                [2014] 1 SLR 694; [2013] SGCA 62
                <br /><br />
                N K Rajarh and others v Tan Eng Chuan and others<br />
                [2013] 3 SLR 103; [2013] SGHC 76
                <br /><br />
                Chi Liung Holdings Sdn Bhd v Attorney-General<br />
                [1994] 2 SLR(R) 314; [1994] SGCA 68
                <br /><br />
                Chi Liung Holdings Sdn Bhd v Attorney-General<br />
                [1993] 1 SLR(R) 708; [1993] SGHC 95
                <br /><br />
                Development Bank of Singapore Ltd v Eng Keong Realty Pte Ltd and another<br />
                [1990] 1 SLR(R) 265; [1990] SGHC 21
                <br /><br />
                Development Bank of Singapore Ltd v Eng Keong Realty Pte Ltd & Anor<br />
                [1990] 3 MLJ 89
                <br /><br />
                Lee Seng Eder v Wee Kim Chwee and others<br />
                [2014] 2 SLR 56; [2013] SGHC 287
                <br /><br />
                Lee Seng Eder v Wee Kim Chwee and others<br />
                [2015] SGHCR 02
                <br /><br />
                Ng Guat Hua v Onestoneinvest Pte Ltd and Others<br />
                [2008] SGHC 156
                <br /><br />
                Nylect Engineering Pte Ltd v BKB Engineering Constructions Pte Ltd and Another<br />
                [2004] SGHC 245
                <br /><br />
                TEC v TED<br />
                [2015] SGFC 93
                <br /><br />
                UEY v UEZ<br />
                [2017] SGFC 108
                <br /><br />
                TEK v TEL<br />
                [2015] SGFC 117
                <br /><br />
                BC v BD (BE, Third Party)<br />
                [2004] SGDC 99
                <br /><br />
                Leong Yoke Wah v Lam Lan<br />
                [2006] SGDC 175
                <br /><br />
                Re Wan Yijun and another<br />
                [1990] 2 SLR(R) 157; [1990] SGHC 65
                <br /><br />
                OP v OQ
                [2006] SGDC 72
                <br /><br />
                Law Society of Singapore v Tham Kok Leong Thomas<br />
                [2006] 1 SLR(R) 775; [2005] SGHC 231
                <br /><br />
                Pacific Rim Investments Pte Ltd v Lam Seng Tiong and another<br />
                [1995] 2 SLR(R) 643; [1995] SGCA 58
                <br /><br />
                Lam Seng Tiong and another v Pacific Rim Investments Pte Ltd<br />
                [1994] 3 SLR(R) 387; [1994] SGHC 232
                <br /><br />
                Wardley Ltd v Datin Chong Mooi Lan and another (administratrix and administrator of the estate of Dato Tong Lee Hwa, deceased)<br />
                [1993] 1 SLR(R) 469; [1993] SGCA 17
                <br /><br />
                Chea Teng Kim v The Wing On Fire & Marine Insurance Co Ltd & Anor<br />
                [1992] SGHC 248
                <br /><br />
                Chea Teng Kim trading as Chea Kim Heng Jewellery v The Wing On Fire & Marine Insurance Co Ltd and Another<br />
                [1992] SGHC 144
                <br /><br />
                The Official Assignee of The Estate of Teo Hia Khoon, a bankrupt and Others v Toh Soo Meng<br />
                [1998] SGHC 415
                <br /><br />
                Newtech Engineering Construction Pte Ltd v BKB Engineering Constructions Pte Ltd and others<br />
                [2003] 4 SLR(R) 73; [2003] SGHC 141
                <br /><br />
                Bayerische Landesbank Girozentrale v Teh Li Li<br />
                [2000] 3 SLR(R) 345; [2000] SGHC 203
                <br /><br />

                Wong Kai Wah v Wong Kai Yuan and another<br />
                [2014] SGHC 147
                <br /><br />
                Hamid Marine Services & Engrg Pte Ltd v Foo Siew Wei and others<br />
                [2020] SGHC 190
                <br /><br />
                Choo Ah Sam v Kieu Ka Tong and another<br />
                [2020] SGHC 62
                <br /><br />
                Containers Printers Pte Ltd v Christopher Tan and Another<br />
                [1997] SGHC 273
                <br /><br />
                Panwah Steel Private Limited v DTG & Co Pte Ltd<br />
                [2010] SGDC 150
                <br /><br />
                Exxonmobil Asia Pacific Pte Ltd v Bombay Dyeing & Manufacturing Co Ltd<br />
                [2007] SGHC 137
                <br /><br />
                OCBC Wearnes & Walden Investments (Singapore) Limited and Others v Goh Shon Hai (Computer Measurement (S) Pte Ltd, Third Party)<br />
                [1999] SGHC 164
                <br /><br />
                Chong Hor Yong trading as Jackie's Shoes Comapny v Chik Chun Wing trading as Tenlead Industrial & Commerce<br />
                [1995] SGHC 26
                <br /><br />
                Jade Alliance Pte Ltd v Donald Mcarthy Pte Ltd<br />
                [2004] SGDC 173

</div>
            </div>
          </div>
        </div>
        <div class="open" id="open3">
          <button class="cross" onClick={showoverlay.bind(null, "3")} >
            &#215;
                  </button>
          <div class="inner">
            <div class="position">
              Yoong Nim Chor<br />
                  Director<br />
            </div>
            <div class="wrapper">
              <div class="left">
                Email: <a href="mailto:yoongnc@unilegal.com.sg">yoongnc@unilegal.com.sg</a><br />
                          Tel: <a href="tel:+6562362432">+65 6236 2432</a>
                <br />
                          Tel: <a href="tel:+6598180268">+65 9818 0268</a>
              </div>
              <div class="right">
                Nim Chor holds a LL.B. (Hons) (Second Class Upper Division) conferred by the National University of Singapore in 1981. He is admitted to as an Advocate & Solicitor (Supreme Court of Singapore) in 1982, an Advocate & Solicitor (High Court of Malaya, Malaysia) in 1994, and a Solicitor (England & Wales) in 1995. Nim Chor is practises as a Consultant of UniLegal LLC (as an Advocate & Solicitor of Singapore), and contemporaneously as Senior Partner of Malaysian law firm Yoong & Partners (as an Advocate & Solicitor of Malaysia).
                          <br /><br />
                          He has practised with eminent City of London law firm Freshfields (now known as Freshfields Bruckhaus Deringer) in their Singapore and London offices. Nim Chor also co-founded prominent Singapore law firms Wong, Yoong, Tan & Molly Lim and Wong Partnership, and went on to set up Yoong & Partners. He has headed the Corporate & Securities Department of KhattarWong LLP before becoming a Consultant with UniLegal. His experience spans matters and transactions in Singapore, Malaysia as well as cross-border transactions in most ASEAN countries, Hong Kong, China, United Kingdom, United States, India and Switzerland.
                          <br /><br />
                          He practices especially in the areas of Corporate, Securities and Finance laws, both as a solicitor and as an advocate. He advises on and works closely with clients in structuring transactions and deals, drafting of relevant agreements and related documents, and legal aspects of completion and implementation. In addition, in situations of conflict or dispute, he has been closely involved in the dispute management process, advising where appropriate on avenues to avoid litigation as well as litigation in the Courts or via arbitration when necessary. Uniquely for a specialist in the areas of Corporate, Securities and Finance laws, Nim Chor has - in those areas - acted for clients and has appeared for clients in the apex courts of both Singapore (The Court of Appeal, Singapore) and Malaysia (The Federal Court, Malaysia). A number of the Court cases on which he has acted are reported as authorities on points of law in Law Reports.
                          <br /><br />
Nim Chor's vast experience includes having acted and advised on Initial Public Offerings of shares (including being the principal partner in listings in Singapore and in Malaysia), bond and other transferable instruments issues, mergers and acquisitions, company, joint venture and commercial transactions, investments and holdings in securities and specific industries in Singapore, Malaysia and other countries, and acquisitions, disposals and derivatives involving personal assets and real property. An area where he has a particularly long and successful record relates to the calling, agenda, regulatory compliances and processes, and conduct of Extraordinary General Meetings of companies listed in Singapore as well as in Malaysia, not least when there is an element of disagreement or dispute in respect of the outcomes. Of late, Nim Chor has also advised on the legal ramifications of cryptocurrencies and Initial Coin Offerings of cryptocurrencies.</div>

            </div>
          </div>
        </div>
        <div class="open" id="open4">
          <button class="cross" onClick={showoverlay.bind(null, "4")} >
            &#215;
                  </button>
          <div class="inner">
            <div class="position">
              Nazim Khan<br />
                  Director<br />
            </div>
            <div class="wrapper">
              <div class="left">
                Email: <a href="mailto:nazim.khan@unilegal.com.sg">nazim.khan@unilegal.com.sg</a><br />
                          Tel: <a href="tel:+6562362939">+65 6236 2939</a>
                <br />
                          Tel: <a href="tel:+6562362932">+65 6236 2932</a>
              </div>
              <div class="right">
                Nazim graduated from the University of London with an LLB Hons in June 1989. He was admitted as a Barrister to the Bar in England & Wales in July 1990 and was admitted as an Advocate & Solicitor in Singapore in January 1992.<br />
                Nazim specialises in high value Commercial Litigation and undertakes advisory and advocacy work in the Singapore Courts and in Domestic and International Arbitrations. As of January 2021, he has 29 years of experience in complex corporate and commercial litigation. <br /><br />
                Examples of cases he recently handled as lead counsel include:-<br />
                <ul>
                  <li>acting for a former Goldman Director relating to the 1MDB saga in relation to CMSA charges in Malaysia and as they relate to Singapore;</li>
                  <li>acting for a Counterparty in the Hin Leong/Ocean Tanker (in excess of US$50 million) matter relating to white collar issues;</li>
                  <li>acting for private equity investor in relation to a negligence action against an offshore bank in an acquisition of an oil rig (value US$6 million);</li>
                  <li>	acting in complex Misrepresentation actions;</li>
                  <li>	acting for a GIP Fund in claims by its preference shareholders against the Fund and subsequently acting for the Directors in claims against them for breach of fiduciary duties (S$40 million);</li>
                  <li>	acting for a substantial unitholder of a REIT in Singapore comprising 18 US hotels originally valued at US$1.2 billion and dealing with issues relating to an EOGM, the MAS and the Trustee;</li>
                  <li>	acting for a Co-Administrator in removing another Administrator resulting in a Settlement of S$22 million;</li>
                  <li>	acting for the Special Committee of a local listed company in relation to investigating allegation of overseas bribery;</li>
                  <li>	claims in the High Court relating to shares in a listed company involving breach of moratorium;</li>
                  <li>	acting for a large Philippines company against an offshore bank in relation to a wrongful call on a standby letter of credit; and</li>
                  <li>	acting for Receiver & Managers and Judicial Managers in relation to Construction Companies.</li>
                </ul>
                <br />
                                      Nazim has experience in the following areas:-
                                      <ul>
                  <li>	Matters relating to Companies & Corporations including derivative actions, minority oppression, breach of director’s duties, financial assistance, breaches of various provisions under the Act, Insolvency, Judicial Management, Corporate Receivership and Restructuring;</li>
                  <li>	Letters of Credit, Standby Letters of Credit, Guarantees and Performance Bonds;</li>
                  <li>	Banking Litigation;</li>
                  <li>	Tortious claims and Economic Torts;</li>
                  <li>	Defamation;</li>
                  <li>	Disputes on assets and matters arising from Probate and Letters of Administration including cross-jurisdictional disputes;</li>
                  <li>	Professional Negligence;</li>
                  <li>	Construction related disputes, infrastructure projects and Power Plants (cross-jurisdictional) - domestic and international arbitration;</li>
                  <li>	Personal Debt Restructuring for owners in Corporate Insolvencies including Voluntary Arrangements.</li>
                </ul>
                  Several of the cases he has done has been reported. Nazim also has experience in corporate agreements, mergers and acquisitions, sale and purchase of shares in companies and businesses and other varieties and permutations of agreements.<br />
                Nazim works with his own team of 3 others. He is also able to put together a bigger team from members within UniLegal LLC comprising of different specialist backgrounds and practitioners outside depending on the value and size of each case and/or deal. Nazim very often works with lawyers and counsel from other jurisdictions in cross-jurisdictional matters and is able to tap on his network for this.<br />
                Over the years he has also advised High Net Worth Individuals (“HNWIs”) and Entrepreneurs on their personal and business legal issues.<br /><br />
                He may be contacted as follows:-<br />
                Telephone:&nbsp;<a href="tel:+6562362939">+65 6236 2939</a><br />
                Email:&nbsp;&nbsp;<a href="mailto:nazim.khan@unilegal.com.sg">nazim.khan@unilegal.com.sg</a> <br />
                Secretary email:&nbsp;<a href="mailto:suhaimi@unilegal.com.sg">suhaimi@unilegal.com.sg</a><br />
                A fuller curriculum vitae can be provided upon request.<br /> </div>

            </div>
          </div>
        </div>
        <div class="open" id="open5">
          <button class="cross" onClick={showoverlay.bind(null, "5")} >
            &#215;
                  </button>
          <div class="inner">
            <div class="position">
              Clarence Tan<br />
                  Director<br />
            </div>

            <div class="wrapper">
              <div class="left">
                Email: <a href="mailto:ckltan@unilegal.com.sg">ckltan@unilegal.com.sg</a><br />
                          Tel: <a href="tel:+6562362950">+65 6236 2950</a>
              </div>
              <div class="right">
                Clarence Tan is Director at UniLegal LLC and specialises in family, civil and commercial litigation, landlord and tenant, insolvency and bankruptcy, Strata Titles Board and Court of Appeal work.
                          <br /><br />
                          Over the years, Clarence has developed a personal approach to practicing law, believing in journeying with his clients and working closely with them to ensure amicable and practical solutions to their cases. His belief in "litigating with humour" has helped him establish strong relationships within the legal fraternity and with his clients, many of whom he still calls friends today.
                          <br /><br />
                          Clarence graduated from the University of Leeds in 1992 and was admitted to Lincoln's Inn in 1995. He was called to the Singapore Bar in 1997 and remains in practice. He is a member of the Law Society of Singapore and Singapore Academy of Law.
                          <br /><br />
Clarence is also a self-professed handyman who loves to tinker with cars, watches, bicycles and anything else he can get his hands on, including his golfing equipment. He loves a game of golf and represents the Law Society in golf in its annual Bar and Bench Games. He currently maintains a single handicap in golf, which he attributes to luck. </div>
</div>
          </div>
        </div>
      </div>
      <div class="installclasswrap">
        <div class="installclass">
          <div class="install">
            <img class="installimg" id="l6" height="3024" width="3024" src={leonard} alt="portomono installation guide" />
            <img src={tri} id="tri6" class="tri" alt="portomono installation guide" />

          </div>
          <div class="open" id="open6mob">
            <div class="inner">
              <div class="inner11">

                <div class="position">
                  Leonard Hazra<br />
                  Partner<br />
                </div>
                <div class="btnmob">
                  <button class="crossmob" onClick={showoverlay.bind(null, "7")} >
                    &#215;
                  </button>
                </div>
              </div>

              <div class="wrapper">
                <div class="left">
                  Email: <a href="mailto:leonard@unilegal.com.sg">leonard@unilegal.com.sg</a><br />
                          Tel: <a href="tel:+6562362411">+65 6236 2411</a>
                </div>
                <div class="right">
                  Leonard is a litigation and dispute resolution lawyer with main areas of focus in corporate, commercial and civil litigation and arbitration. Leonard has litigated and advised on a wide spectrum of cases, both local and with cross-border elements involving shareholders' disputes, breach of directors' duties, corporate investment and business disputes, loans and securities transactions, individual and corporate insolvencies, local and international commercial transaction disputes, building and construction disputes, tortious claims and matrimonial and family disputes. Leonard has also litigated and represented clients in criminal and regulatory offences proceedings.
                          <br /><br />
                              Leonard has appeared as Lead and Co-Counsel in hearings and trials in all levels of Courts in Singapore and in international arbitrations as well as in appeals before the Court of Appeal.
                          <br /><br />
                          Leonard was called to the Singapore Bar in 1992.
                          </div>
              </div>
            </div>
          </div>
          <div class="install">
            <img class="installimg" id="l7" height="3024" width="3024" src={ernest} alt="portomono installation guide" />
            <img src={tri} id="tri7" class="tri" alt="portomono installation guide" />

          </div>
          <div class="open" id="open7mob">
            <div class="inner">
              <div class="inner11">

                <div class="position">
                  Ernest Balasubramaniam<br />
                  Director<br />
                </div>
                <div class="btnmob">
                  <button class="crossmob" onClick={showoverlay.bind(null, "8")} >
                    &#215;
                  </button>
                </div>
              </div>

              <div class="wrapper">
                <div class="left">
                  Email: <a href="mailto:ernest.bala@ernestbala.com.sg">ernest.bala@ernestbala.com.sg</a><br />
                          Tel: <a href="tel:+6563252855">+65 6325 2855</a>
                </div>
                <div class="right">
                  Ernest Balasubramaniam graduated from the National University of Singapore in 1987.  He was emplaced in the Singapore Legal Service in 1988.
                                            <br /><br />

                  Ernest was admitted as an Advocate & Solicitor of the Supreme Court of Singapore in 1990. He obtained his Masters in law degree from the National University of Singapore in 1992 where he read advanced Banking Law, International Business Transactions, Insurance and Tax.  He obtained his Graduate Certificate in International Arbitration (GCIA) in 2019.
                                            <br /><br />

                  Ernest commenced private practice in June 1993 as a partner with a Singapore firm involved in 3 main areas, conveyancing, civil litigation and corporate work. He joined Arfat Selvam Alliance in 1999 and was head of the Real Estate and Civil Law Practice prior to joining Unilegal LLC in April 2010.  Ernest enjoys a broad practice, which include conveyancing, general corporate, banking, project finance, tax and civil litigation and arbitration. He was counsel for a landmark decision on the law of issue estoppel and easements.
                                            <br /><br />

                  His practice areas include civil litigation involving bankruptcy, Probate, Tortious Claims, Oppression of the Minority and derivative actions as well as corporate matters both locally and internationally.  He is active in International Arbitration matters.
                                            <br /><br />

                  He frequently advises major institutional clients including the CPF Board, Banks, Real Estate Developers and both private and listed companies.
                                            <br /><br />

                  He is currently a non independent non-executive Chairman of Viborpower Corporation Limited and independent Director of Taiwan listed Press Automation Technology Limited.
 </div>

              </div>
            </div>
          </div>

          <div class="install">
            <img class="installimg" id="l8" height="3024" width="3024" src={serena} alt="portomono installation guide" />
            <img src={tri} id="tri8" class="tri" alt="portomono installation guide" />

          </div>
          <div class="open" id="open8mob">
            <div class="inner">
              <div class="inner11">

                <div class="position">
                  Serena Kent<br />
                  Director<br />
                </div>
                <div class="btnmob">
                  <button class="crossmob" onClick={showoverlay.bind(null, "9")} >
                    &#215;
                  </button>
                </div>
              </div>

              <div class="wrapper">
                <div class="left">
                  Email: <a href="mailto:serena.kent@ernestbala.com.sg">serena.kent@ernestbala.com.sg</a><br />
                          Tel: <a href="tel:+6563252854">+65 6325 2854</a>
                </div>
                <div class="right">
                  Serena graduated from the National University of Singapore with an LLB (Hons) and LL.M and was called to the Singapore Bar in 1988.  Prior to private practice, she was Vice President (Legal) at two local banks.
                <br /><br />
                Serena has extensive experience in all types of banking transactions including retail, commercial and private banking sectors.  Her areas of practice include commercial leasing, banking and mortgage finance, real estate finance, collective sales and securitization, direct and indirect property acquisitions.
                  </div>
              </div>
            </div>
          </div>
          <div class="install">
            <img class="installimg" id="l9" height="3024" width="3024" src={kenneth} alt="portomono installation guide" />
            <img src={tri} id="tri9" class="tri" alt="portomono installation guide" />

          </div>
          <div class="open" id="open9mob">
            <div class="inner">
              <div class="inner11">

                <div class="position">
                  Kenneth Koh<br />
                  Consultant<br />
                </div>
                <div class="btnmob">
                  <button class="crossmob" onClick={showoverlay.bind(null, "10")} >
                    &#215;
                  </button>
                </div>
              </div>
              <div class="wrapper">
                <div class="left">
                  Email: <a href="mailto:kenkoh@unilegal.com.sg">kenkoh@unilegal.com.sg</a><br />
                </div>
                <div class="right">
                  Kenneth graduated from the National University of Singapore in 1983. He is an Advocate & Solicitor of the Supreme Court of Singapore.
                          <br />
                  <br />

                          He specialises in litigation, arbitration and mediation, with a particular focus on infrastructure, civil engineering and building construction disputes.
                          <br />
                  <br />

                          He also acts for clients in real estate and property financing matters. He was legal advisor to the Singapore Contractors Association and authored the Singapore chapters in 2 international publications:
                          <ul>
                    <li>
                      Transnational Litigation - A Practitioner's Guide by Oceana Publications</li>
                    <li>The Handbook on Cross-Border Contracting by AIJA</li></ul>  </div>
              </div>

            </div>
          </div>
          <div class="install">
            <img class="installimg" id="l10" height="3024" width="3024" src={eric} alt="portomono installation guide" />
            <img src={tri} id="tri10" class="tri" alt="portomono installation guide" />

          </div>
          <div class="open" id="open10mob">
            <div class="inner">
              <div class="inner11">

                <div class="position">
                  Eric Low Eng Wan<br />
                  Director<br />
                </div>
                <div class="btnmob">
                  <button class="crossmob" onClick={showoverlay.bind(null, "11")} >
                    &#215;
                  </button>
                </div>
              </div>

              <div class="wrapper">
                <div class="left">
                  Email: <a href="mailto:eric@unilegal.com.sg">eric@unilegal.com.sg</a>
                </div>
                <div class="right">
                  Eric graduated with the degree of LL.B (Hons) from the University of London in 1981. He was awarded the degree of Barrister-at-Law (Gray's Inn) in 1983 and was called to the English Bar that year.
                  <br /><br />
He was called to the Singapore Bar in 1984 and commenced private practice in Wee Swee Teow & Co.
                  <br /><br />
From 1986 to 1991, he served in the Singapore Legal Service and held the concurrent appointments of Magistrate, Deputy Registrar of the then Subordinate Courts (now the State Courts), Coroner, Referee of the Small Claims Tribunal and Assistant Registrar of the Supreme Court.
                  <br /><br />
He left the Singapore Legal Service in 1991 to join Khattar Wong & Partners and was a litigation partner when he left in September 2000 for other law firms before joining UniLegal LLC as a Director from March 2003 until April 2010 when he became a Consultant and has remained so since then.
                  <br /><br />
Over the years, Eric has represented various parties in a number of significant cases such as the High Court decision that determined the age of majority in Singapore; the Court of Appeal decision that involved the liability of carriers of goods and banks for conversion by releasing goods without a bill of lading but covered by a banker's guarantee; the case concerning the division of matrimonial assets following divorce where the Court of Appeal held that an ex-spouse may have an interest in the monies in a member's CPF account that may be protected by a Court Order; and the Committee of Inquiry hearing into the collapse of Nicoll Highway in 2004 in which he acted for the sub-contractor who carried out the project's geotechnical and instrumentation works.
                  <br /><br />
Eric's areas of practice include arbitration, building and construction law, civil and commercial litigation, mediation, disputes involving employment law, hire purchase and leasing, banking, landlord and tenant, insolvency, companies and partnerships.

                          </div>
              </div>

            </div>
          </div>
        </div>
        <div class="open" id="open6">
          <button class="cross" onClick={showoverlay.bind(null, "6")} >
            &#215;
                  </button>
          <div class="inner">
            <div class="position">
              Leonard Hazra<br />
                  Partner<br />
            </div>
            <div class="wrapper">
              <div class="left">
                Email: <a href="mailto:leonard@unilegal.com.sg">leonard@unilegal.com.sg</a><br />
                          Tel: <a href="tel:+6562362411">+65 6236 2411</a>
              </div>
              <div class="right">
                Leonard is a litigation and dispute resolution lawyer with main areas of focus in corporate, commercial and civil litigation and arbitration. Leonard has litigated and advised on a wide spectrum of cases, both local and with cross-border elements involving shareholders' disputes, breach of directors' duties, corporate investment and business disputes, loans and securities transactions, individual and corporate insolvencies, local and international commercial transaction disputes, building and construction disputes, tortious claims and matrimonial and family disputes. Leonard has also litigated and represented clients in criminal and regulatory offences proceedings.
                          <br /><br />
                              Leonard has appeared as Lead and Co-Counsel in hearings and trials in all levels of Courts in Singapore and in international arbitrations as well as in appeals before the Court of Appeal.
                          <br /><br />
                          Leonard was called to the Singapore Bar in 1992.
                          </div>
            </div>
          </div>
        </div>
        <div class="open" id="open7">
          <button class="cross" onClick={showoverlay.bind(null, "7")} >
            &#215;
                  </button>
          <div class="inner">
            <div class="position">
              Ernest Balasubramaniam<br />
                  Director<br />
            </div>
            <div class="wrapper">
              <div class="left">
                Email: <a href="mailto:ernest.bala@ernestbala.com.sg">ernest.bala@ernestbala.com.sg</a><br />
                          Tel: <a href="tel:+6563252855">+65 6325 2855</a>
              </div>
              <div class="right">
                Ernest Balasubramaniam graduated from the National University of Singapore in 1987.  He was emplaced in the Singapore Legal Service in 1988.
                                            <br /><br />

                  Ernest was admitted as an Advocate & Solicitor of the Supreme Court of Singapore in 1990. He obtained his Masters in law degree from the National University of Singapore in 1992 where he read advanced Banking Law, International Business Transactions, Insurance and Tax.  He obtained his Graduate Certificate in International Arbitration (GCIA) in 2019.
                                            <br /><br />

                  Ernest commenced private practice in June 1993 as a partner with a Singapore firm involved in 3 main areas, conveyancing, civil litigation and corporate work. He joined Arfat Selvam Alliance in 1999 and was head of the Real Estate and Civil Law Practice prior to joining Unilegal LLC in April 2010.  Ernest enjoys a broad practice, which include conveyancing, general corporate, banking, project finance, tax and civil litigation and arbitration. He was counsel for a landmark decision on the law of issue estoppel and easements.
                                            <br /><br />

                  His practice areas include civil litigation involving bankruptcy, Probate, Tortious Claims, Oppression of the Minority and derivative actions as well as corporate matters both locally and internationally.  He is active in International Arbitration matters.
                                            <br /><br />

                  He frequently advises major institutional clients including the CPF Board, Banks, Real Estate Developers and both private and listed companies.
                                            <br /><br />

                  He is currently a non independent non-executive Chairman of Viborpower Corporation Limited and independent Director of Taiwan listed Press Automation Technology Limited.</div>
            </div>
          </div>
        </div>
        <div class="open" id="open8">
          <button class="cross" onClick={showoverlay.bind(null, "8")} >
            &#215;
                  </button>
          <div class="inner">
            <div class="position">
              Serena Kent<br />
                  Director<br />
            </div>
            <div class="wrapper">
              <div class="left">
                Email: <a href="mailto:serena.kent@ernestbala.com.sg">serena.kent@ernestbala.com.sg</a><br />
                          Tel: <a href="tel:+6563252854">+65 6325 2854</a>
              </div>
              <div class="right">
                Serena graduated from the National University of Singapore with an LLB (Hons) and LL.M and was called to the Singapore Bar in 1988.  Prior to private practice, she was Vice President (Legal) at two local banks.
                <br /><br />
                Serena has extensive experience in all types of banking transactions including retail, commercial and private banking sectors.  Her areas of practice include commercial leasing, banking and mortgage finance, real estate finance, collective sales and securitization, direct and indirect property acquisitions.
 </div></div>
          </div>
        </div>
        <div class="open" id="open9">
          <button class="cross" onClick={showoverlay.bind(null, "9")} >
            &#215;
                  </button>
          <div class="inner">
            <div class="position">
              Kenneth Koh<br />
                  Consultant<br />
            </div>
            <div class="wrapper">
              <div class="left">
                Email: <a href="mailto:kenkoh@unilegal.com.sg">kenkoh@unilegal.com.sg</a><br />
              </div>
              <div class="right">
                Kenneth graduated from the National University of Singapore in 1983. He is an Advocate & Solicitor of the Supreme Court of Singapore.
                          <br />
                <br />

                          He specialises in litigation, arbitration and mediation, with a particular focus on infrastructure, civil engineering and building construction disputes.
                          <br />
                <br />

                          He also acts for clients in real estate and property financing matters. He was legal advisor to the Singapore Contractors Association and authored the Singapore chapters in 2 international publications:
                          <ul>
                  <li>
                    Transnational Litigation - A Practitioner's Guide by Oceana Publications</li>
                  <li>The Handbook on Cross-Border Contracting by AIJA</li></ul> </div>
            </div>

          </div>
        </div>
        <div class="open" id="open10">
          <button class="cross" onClick={showoverlay.bind(null, "10")} >
            &#215;
                  </button>
          <div class="inner">
            <div class="position">
              Eric Low Eng Wan<br />
                  Director<br />
            </div>
            <div class="wrapper">
              <div class="left">
                Email: <a href="mailto:eric@unilegal.com.sg">eric@unilegal.com.sg</a>
              </div>
              <div class="right">
                Eric graduated with the degree of LL.B (Hons) from the University of London in 1981. He was awarded the degree of Barrister-at-Law (Gray's Inn) in 1983 and was called to the English Bar that year.
                  <br /><br />
He was called to the Singapore Bar in 1984 and commenced private practice in Wee Swee Teow & Co.
                  <br /><br />
From 1986 to 1991, he served in the Singapore Legal Service and held the concurrent appointments of Magistrate, Deputy Registrar of the then Subordinate Courts (now the State Courts), Coroner, Referee of the Small Claims Tribunal and Assistant Registrar of the Supreme Court.
                  <br /><br />
He left the Singapore Legal Service in 1991 to join Khattar Wong & Partners and was a litigation partner when he left in September 2000 for other law firms before joining UniLegal LLC as a Director from March 2003 until April 2010 when he became a Consultant and has remained so since then.
                  <br /><br />
Over the years, Eric has represented various parties in a number of significant cases such as the High Court decision that determined the age of majority in Singapore; the Court of Appeal decision that involved the liability of carriers of goods and banks for conversion by releasing goods without a bill of lading but covered by a banker's guarantee; the case concerning the division of matrimonial assets following divorce where the Court of Appeal held that an ex-spouse may have an interest in the monies in a member's CPF account that may be protected by a Court Order; and the Committee of Inquiry hearing into the collapse of Nicoll Highway in 2004 in which he acted for the sub-contractor who carried out the project's geotechnical and instrumentation works.
                  <br /><br />
Eric's areas of practice include arbitration, building and construction law, civil and commercial litigation, mediation, disputes involving employment law, hire purchase and leasing, banking, landlord and tenant, insolvency, companies and partnerships.

              </div>
            </div>

          </div>
        </div>
      </div>
  
    </Layout>
  )
}

export default warrantyRequestPage
