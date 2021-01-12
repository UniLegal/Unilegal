import React from 'react'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import lai from '../images/lawyers/lai.jpg'
import kenneth from '../images/lawyers/kenneth.jpg'
import serena from '../images/lawyers/serena.jpg'
import ernest from '../images/lawyers/ernest.jpg'
import ranvir from '../images/lawyers/ranvir.jpg'
import ng from '../images/lawyers/ng.jpg'
import nazim from '../images/lawyers/nazim.jpg'
import clarence from '../images/lawyers/clarence.jpg'
import yoongnc from '../images/lawyers/yoongnc.jpg'
import eric from '../images/lawyers/eric.jpg'
import leonard from '../images/lawyers/leonard.jpg'
import chia from '../images/lawyers/chia.jpg'
import tri from '../images/lawyers/tri.png'
import kunal from '../images/lawyers/kunal.jpg'

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
    }
    else {
      $('#open' + num).slideUp("slow");
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
                  He has been involved in numerous civil litigation and arbitration cases, many of which are often cited as legal precedents and are reported in the Singapore Law Reports. His involvement in the numerous litigation cases includes commercial, construction, family, estate, property, conveyancing and other matters. In addition, in the various situations of conflict or dispute, whether the issues are relating to sale of goods or services, trust, company law, property, etc, he has always been closely involved in the dispute management process, advising where appropriate on avenues to avoid litigation (alternative dispute resolution and/or mediation) as well as litigating when we have to, in the Courts or via arbitration.  <br /><br />
                  Swee Fung’s vast experience includes having acted on a regular basis for and advised numerous clients in matters that were mediated, arbitrated and/or litigated, in the appropriate forums including the apex courts of Singapore (The High Court and the Court of Appeal, Singapore).<br /><br />
                  As part of his belief in life-long learning, he had pursued further education and obtained a Masters of Business Administration (for Asia Pacific Executives) from National University of Singapore in 1999 and he regularly updates himself on the latest up-to-date knowledge so as to provide the best and excellent advice to his clients. His knowledge and skills therefore straddle many areas other than just purely the legal realm and he is able to often perceive and provide a more complete and holistic view of matters.<br /><br />
                  Swee Fung is an able initiator and makes things happen. He is a Founding Director of UniLegal LLC which he co-founded on 1 August 2001. Prior to that, he was a Senior Partner of two other law firms. He is also admitted as an Advocate & Solicitor in the Malaysian Bar (although he has since ceased practice there). As a sign of his maturity and strength, he remains the most senior director in UniLegal LLC and he has been with the law corporation since two (2) decades ago.
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
            <img class="installimg" id="l4" height="3024" width="3024" src={ng} alt="portomono installation guide" />
            <img src={tri} id="tri4" class="tri" alt="portomono installation guide" />

          </div>
          <div class="open" id="open4mob">
            <div class="inner">
              <div class="inner11">
                <div class="position">
                  Ng Puay Joo<br />
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
                  Email: <a href="mailto:ngpuayjoo@unilegal.com.sg">ngpuayjoo@unilegal.com.sg</a><br />
                          Tel: <a href="tel:+6562362931">+65 6236 2931</a>
                  <br />
                          Tel: <a href="tel:+6562362948">+65 6236 2948</a>
                </div>
                <div class="right">
                  Puay Joo has accumulated over 30 years of experience in all aspects of real estate work, advising both corporate and individual clients on acquisitions and disposals of real estate, regulatory matters, housing developments and leasing matters.
                  <br /><br />
                  She has been a director with Unilegal LLC since 2006. Prior to that, she was a partner in one of the Big Four law firms in Singapore, as well as an in-house legal counsel of one of the major local banks.  Puay Joo is appointed by the Singapore Academy of Law as a Commissioner for Oaths and Notary Public. She has also taught the Practice Law Course managed by the Singapore Institute of Legal Education.<br /><br />
                  Puay Joo’s  diverse experience in real estate and general solicitors’ work includes the following:
                  <ul>
                    <li>The sale and purchase of residential, commercial, industrial, JTC and HDB properties by both individuals and corporates, statutory boards, registered societies</li>
                    <li>Representing developers in the sale of units in licensed and unlicensed housing development projects</li>
                    <li>Advising and acting for financial institutions on a variety of banking and finance transactions, including development project financing, multi-currency loans, syndicated loans and in the mortgagee sale of residential, commercial, industrial, JTC and HDB properties</li>
                    <li>Handling retail property transactions which involve acting for financial institutions and CPF Board</li>
                    <li>Handling the collective sale of units in residential developments</li>
                    <li>Advising and acting for management corporations in the lodgment and discharge of Charges</li>
                    <li>Advising and preparing tenancies and leases for residential, commercial and industrial properties</li>
                    <li>Drafting of Wills, Deed Polls, Lasting Power of Attorneys, Statutory Declarations, estate planning and trusts, probate and administrative matters</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
          <div class="install">
            <img class="installimg" id="l5" height="3024" width="3024" src={nazim} alt="portomono installation guide" />
            <img src={tri} id="tri5" class="tri" alt="portomono installation guide" />

          </div>
          <div class="open" id="open5mob">
            <div class="inner">
              <div class="inner11">

                <div class="position">
                  Nazim Khan<br />
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
                  Email: <a href="mailto:nazim.khan@unilegal.com.sg">nazim.khan@unilegal.com.sg</a><br />
                          Tel: <a href="tel:+6562362939">+65 6236 2939</a>
                  <br />
                          Tel: <a href="tel:+6562362932">+65 6236 2932</a>
                </div>
                <div class="right">
                  Nazim graduated from the University of London with an LL.B Hons in June 1989. He was admitted as a Barrister to the Bar in England & Wales in July 1990 and was admitted as an Advocate & Solicitor in Singapore in January 1992.
                          <br /><br />
                          Nazim specialises in high value Commercial Litigation and undertakes advisory and advocacy work in the Singapore Courts and in Domestic and International Arbitrations. As of 2018, he has 26 years of experience in very complex and intricate issues in the corporate/commercial arena. He brings his passion for the business world into perceiving and processing facts such as to create out of the box answers within the legal framework. Whilst he has wide experience in Court advocacy, Appellate advocacy and Arbitration, he considers cases as "problem solving" opportunities which need not necessarily lead to trial or arbitration. He also views settlements through Alternative Dispute Resolution or other alternatives to be a much needed and more viable approach in the 21st century. An efficient, systematic and opportunistic solving of problems is key. Every case has its waxes and wanes, ebbs and flows. The timing of a settlement is also critical.
                          <br /><br />
                          Nazim has experience in the following areas, namely:-
                          <ul>
                    <li >Matters relating to Companies & Corporations including derivative actions, minority oppression, breach of director's duties, financial assistance, breaches of various provisions under the Act, Insolvency, Judicial Management, Corporate Receivership and Restructuring</li>
                    <li >Letters of Credit, Standby Letters of Credit, Guarantees and Performance Bonds</li>
                    <li >Banking Litigation</li>
                    <li >Tortious claims and Economic Torts</li>
                    <li >Defamation</li>
                    <li >Disputes on assets and matters arising from Probate and Letters of Administration including cross-jurisdictional disputes</li>
                    <li >Professional Negligence</li >
                    <li >Construction related disputes and those relating to infrastructure projects and Power Plant Projects(cross - jurisdictional) both in domestic and international arbitration</li >
                    <li >Personal Debt Restructuring for owners in Corporate Insolvencies including Voluntary Arrangements</li >
                  </ul>
                          Several of the cases he has done has been reported. Nazim also has experience in corporate agreements including mergers and acquisitions, sale and purchase of shares in companies and businesses.
                          <br /><br />
Nazim is able to put together a team from members within UniLegal LLC and practitioners outside depending on the value and size of each case. Nazim is also able to work with lawyers and counsel from other jurisdictions in cross-jurisdictional matters and is able to tap on his network for this. Nazim is able to put together either a large team or a small team as the case may be.
                          <br /><br />
Over the years he has also advised High Net Worth individuals and Entrepreneurs on variety of issues and problems.
                          <br /><br />
A fuller curriculum vitae can be provided upon request
                              </div></div>
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
                  He has been involved in numerous civil litigation and arbitration cases, many of which are often cited as legal precedents and are reported in the Singapore Law Reports. His involvement in the numerous litigation cases includes commercial, construction, family, estate, property, conveyancing and other matters. In addition, in the various situations of conflict or dispute, whether the issues are relating to sale of goods or services, trust, company law, property, etc, he has always been closely involved in the dispute management process, advising where appropriate on avenues to avoid litigation (alternative dispute resolution and/or mediation) as well as litigating when we have to, in the Courts or via arbitration.  <br /><br />
                  Swee Fung’s vast experience includes having acted on a regular basis for and advised numerous clients in matters that were mediated, arbitrated and/or litigated, in the appropriate forums including the apex courts of Singapore (The High Court and the Court of Appeal, Singapore).<br /><br />
                  As part of his belief in life-long learning, he had pursued further education and obtained a Masters of Business Administration (for Asia Pacific Executives) from National University of Singapore in 1999 and he regularly updates himself on the latest up-to-date knowledge so as to provide the best and excellent advice to his clients. His knowledge and skills therefore straddle many areas other than just purely the legal realm and he is able to often perceive and provide a more complete and holistic view of matters.<br /><br />
                  Swee Fung is an able initiator and makes things happen. He is a Founding Director of UniLegal LLC which he co-founded on 1 August 2001. Prior to that, he was a Senior Partner of two other law firms. He is also admitted as an Advocate & Solicitor in the Malaysian Bar (although he has since ceased practice there). As a sign of his maturity and strength, he remains the most senior director in UniLegal LLC and he has been with the law corporation since two (2) decades ago.
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
              Ng Puay Joo<br />
                  Director<br />
            </div>
            <div class="wrapper">
              <div class="left">
                Email: <a href="mailto:ngpuayjoo@unilegal.com.sg">ngpuayjoo@unilegal.com.sg</a><br />
                          Tel: <a href="tel:+6562362931">+65 6236 2931</a>
                <br />
                          Tel: <a href="tel:+6562362948">+65 6236 2948</a>
              </div>
              <div class="right">
                Puay Joo has accumulated over 30 years of experience in all aspects of real estate work, advising both corporate and individual clients on acquisitions and disposals of real estate, regulatory matters, housing developments and leasing matters.
                  <br /><br />
                  She has been a director with Unilegal LLC since 2006. Prior to that, she was a partner in one of the Big Four law firms in Singapore, as well as an in-house legal counsel of one of the major local banks.  Puay Joo is appointed by the Singapore Academy of Law as a Commissioner for Oaths and Notary Public. She has also taught the Practice Law Course managed by the Singapore Institute of Legal Education.<br /><br />
                  Puay Joo’s  diverse experience in real estate and general solicitors’ work includes the following:
                  <ul>
                  <li>The sale and purchase of residential, commercial, industrial, JTC and HDB properties by both individuals and corporates, statutory boards, registered societies</li>
                  <li>Representing developers in the sale of units in licensed and unlicensed housing development projects</li>
                  <li>Advising and acting for financial institutions on a variety of banking and finance transactions, including development project financing, multi-currency loans, syndicated loans and in the mortgagee sale of residential, commercial, industrial, JTC and HDB properties</li>
                  <li>Handling retail property transactions which involve acting for financial institutions and CPF Board</li>
                  <li>Handling the collective sale of units in residential developments</li>
                  <li>Advising and acting for management corporations in the lodgment and discharge of Charges</li>
                  <li>Advising and preparing tenancies and leases for residential, commercial and industrial properties</li>
                  <li>Drafting of Wills, Deed Polls, Lasting Power of Attorneys, Statutory Declarations, estate planning and trusts, probate and administrative matters</li>
                </ul> </div>

            </div>
          </div>
        </div>
        <div class="open" id="open5">
          <button class="cross" onClick={showoverlay.bind(null, "5")} >
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
                Nazim graduated from the University of London with an LL.B Hons in June 1989. He was admitted as a Barrister to the Bar in England & Wales in July 1990 and was admitted as an Advocate & Solicitor in Singapore in January 1992.
                          <br /><br />
                          Nazim specialises in high value Commercial Litigation and undertakes advisory and advocacy work in the Singapore Courts and in Domestic and International Arbitrations. As of 2018, he has 26 years of experience in very complex and intricate issues in the corporate/commercial arena. He brings his passion for the business world into perceiving and processing facts such as to create out of the box answers within the legal framework. Whilst he has wide experience in Court advocacy, Appellate advocacy and Arbitration, he considers cases as "problem solving" opportunities which need not necessarily lead to trial or arbitration. He also views settlements through Alternative Dispute Resolution or other alternatives to be a much needed and more viable approach in the 21st century. An efficient, systematic and opportunistic solving of problems is key. Every case has its waxes and wanes, ebbs and flows. The timing of a settlement is also critical.
                          <br /><br />
                          Nazim has experience in the following areas, namely:-
                          <ul>
                  <li >Matters relating to Companies & Corporations including derivative actions, minority oppression, breach of director's duties, financial assistance, breaches of various provisions under the Act, Insolvency, Judicial Management, Corporate Receivership and Restructuring</li>
                  <li >Letters of Credit, Standby Letters of Credit, Guarantees and Performance Bonds</li>
                  <li >Banking Litigation</li>
                  <li >Tortious claims and Economic Torts</li>
                  <li >Defamation</li>
                  <li >Disputes on assets and matters arising from Probate and Letters of Administration including cross-jurisdictional disputes</li>
                  <li >Professional Negligence</li >
                  <li >Construction related disputes and those relating to infrastructure projects and Power Plant Projects(cross - jurisdictional) both in domestic and international arbitration</li >
                  <li >Personal Debt Restructuring for owners in Corporate Insolvencies including Voluntary Arrangements</li >
                </ul>
                          Several of the cases he has done has been reported. Nazim also has experience in corporate agreements including mergers and acquisitions, sale and purchase of shares in companies and businesses.
                          <br /><br />
Nazim is able to put together a team from members within UniLegal LLC and practitioners outside depending on the value and size of each case. Nazim is also able to work with lawyers and counsel from other jurisdictions in cross-jurisdictional matters and is able to tap on his network for this. Nazim is able to put together either a large team or a small team as the case may be.
                          <br /><br />
Over the years he has also advised High Net Worth individuals and Entrepreneurs on variety of issues and problems.
                          <br /><br />
A fuller curriculum vitae can be provided upon request
                          </div></div>
          </div>
        </div>
      </div>
      <div class="installclasswrap">
        <div class="installclass">
          <div class="install">
            <img class="installimg" id="l6" height="3024" width="3024" src={clarence} alt="portomono installation guide" />
            <img src={tri} id="tri6" class="tri" alt="portomono installation guide" />

          </div>
          <div class="open" id="open6mob">
            <div class="inner">
              <div class="inner11">

                <div class="position">
                  Clarence Tan<br />
                  Director<br />
                </div>
                <div class="btnmob">
                  <button class="crossmob" onClick={showoverlay.bind(null, "6")} >
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
          <div class="install">
            <img class="installimg" id="l7" height="3024" width="3024" src={leonard} alt="portomono installation guide" />
            <img src={tri} id="tri7" class="tri" alt="portomono installation guide" />

          </div>
          <div class="open" id="open7mob">
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
            <img class="installimg" id="l8" height="3024" width="3024" src={ernest} alt="portomono installation guide" />
            <img src={tri} id="tri8" class="tri" alt="portomono installation guide" />

          </div>
          <div class="open" id="open8mob">
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
            <img class="installimg" id="l9" height="3024" width="3024" src={serena} alt="portomono installation guide" />
            <img src={tri} id="tri9" class="tri" alt="portomono installation guide" />

          </div>
          <div class="open" id="open9mob">
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
            <img class="installimg" id="l10" height="3024" width="3024" src={kenneth} alt="portomono installation guide" />
            <img src={tri} id="tri10" class="tri" alt="portomono installation guide" />

          </div>
          <div class="open" id="open10mob">
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
        </div>
        <div class="open" id="open6">
          <button class="cross" onClick={showoverlay.bind(null, "6")} >
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
Clarence is also a self-professed handyman who loves to tinker with cars, watches, bicycles and anything else he can get his hands on, including his golfing equipment. He loves a game of golf and represents the Law Society in golf in its annual Bar and Bench Games. He currently maintains a single handicap in golf, which he attributes to luck.</div>
            </div>
          </div>
        </div>
        <div class="open" id="open7">
          <button class="cross" onClick={showoverlay.bind(null, "7")} >
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
        <div class="open" id="open8">
          <button class="cross" onClick={showoverlay.bind(null, "8")} >
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
        <div class="open" id="open9">
          <button class="cross" onClick={showoverlay.bind(null, "9")} >
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
        <div class="open" id="open10">
          <button class="cross" onClick={showoverlay.bind(null, "10")} >
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
      </div>
      <div class="installclasswrap">
        <div class="installclass">
          <div class="installone">
            <img class="installimg" id="l11" height="3024" width="3024" src={eric} alt="portomono installation guide" />
            <img src={tri} id="tri11" class="tri" alt="portomono installation guide" />


          </div>
          <div class="open" id="open11mob">
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
          <div class="installone">
            <img class="installimg" id="l12" height="3024" width="3024" src={chia} alt="portomono installation guide" />
            <img src={tri} id="tri12" class="tri" alt="portomono installation guide" />


          </div>
          <div class="open" id="open12mob">
            <div class="inner">
              <div class="inner11">

                <div class="position">
                  Chia Cheok Sien<br />
                  Partner<br />
                </div>
                <div class="btnmob">
                  <button class="crossmob" onClick={showoverlay.bind(null, "12")} >
                    &#215;
                  </button>
                </div>
              </div>

              <div class="wrapper">
                <div class="left">
                  Email: <a href="mailto:chia@unilegal.com.sg">chia@unilegal.com.sg</a><br />
                </div>
                <div class="right">
                  Cheok Sien obtained his degree in Bachelor of Laws (Honours) from the National University of Singapore. He was admitted as an Advocate & Solicitor of the Supreme Court of Singapore in 1984.
                              <br /><br />
With extensive experience in litigation and dispute resolution, in addition to being legal counsel in transactional and corporate work, he is well placed to help you in legal matters.
                              <br /><br />
Besides being in private practice, he headed the legal department of SMIT SINGAPORE, an internationally renowned maritime services company as well as the Singapore Institute of Technology, one of the autonomous universities in Singapore.
                              <br /><br />
His current areas of focus include:
                              <ul><li>Dispute resolution (including civil & commercial litigation)</li>
                    <li>	Estate & trusts (including wills, probate, succession & wealth planning) matters</li>
                    <li>	Company & business law</li>
                    <li>	Insolvency work</li>
                    <li>	Personal injury & property damage </li>
                    <li>Real estate transactions & financing</li>
                    <li>Family & matrimonial matters</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>       <div class="installone">
            <img class="installimg" id="l13" height="3024" width="3024" src={kunal} alt="portomono installation guide" />
            <img src={tri} id="tri13" class="tri" alt="portomono installation guide" />


          </div>
          <div class="open" id="open13mob">
            <div class="inner">
              <div class="inner13">
                <div class="positiondiv">

                  <div class="position">
                    Kunal Mirpuri<br />
                  Partner<br />
                  </div>

                  <div class="btnmob">
                    <button class="crossmob" onClick={showoverlay.bind(null, "13")} >
                      &#215;
                  </button>
                  </div>
                </div>
              </div>

              <div class="wrapper">
                <div class="left">
                  Email: <a href="mailto:kmirpuri@unilegal.com.sg">kmirpuri@unilegal.com.sg</a><br />
                                          Tel: <a href="tel:+6562362436">+65 6236 2436</a><br />
                          Fax: <a href="tel:+6562261993">+65 6226 1993</a>                </div>
                <div class="right">
                  Kunal graduated from the University of Exeter in the United Kingdom with a Bachelor of Laws (Second Class Honours in the Upper Division) in 2017 and was admitted to the Singapore Bar as an Advocate and Solicitor of the Supreme Court in 2020. Prior to joining Unilegal LLC, Kunal trained at a boutique commercial litigation set, which was recently recognised by Asialaw Profiles 2021 as a Notable Firm for Dispute Resolution and recognised by the Straits Times Singapore as one of the Best Law Firms for 2021.
                <br /><br />
                Kunal’s main areas of practice include fraud and asset recovery, complex civil and commercial disputes (including but not limited to fraud, breach of director duties, negligence, economic torts, ship arrests, ship financing disputes, trade finance, construction disputes and banking litigation) and Restructuring/Insolvency (including debt restructuring, winding up, judicial management and schemes of arrangement), general corporate practice and financial services law and regulation.
                <br /><br />
                Kunal has experience in drafting legal documents such as Statement of Claims, Defences and affidavits for Interlocutory Applications. He is also experienced in offering commercially sound legal advice to clients, discussing tactical strategies and practical steps to be taken by them. He is well-versed in civil and criminal procedure, having had various experiences in these areas of law. A confident person, he is able to hold his own in client meetings and in the courtroom. He is also proficient in case file management and time management.
                <br /><br />
                Kunal is also fluent in both English and Hindi (both written and spoken).
                <br /><br />
                Some notable cases that Kunal has assisted in during his tenure as a trainee and associate include:
                <ul>
                    <li>	Advising a substantial shareholder of the manager of a listed REIT on the SGX (REIT valued at approximately US$1.27 billion as at listing date) </li>

                    <li>Assisting in a cross-border shareholder dispute amounting to over £700,000 involving a European hotel management company which manages brands such as Hyatt and the Marriot. As the client had parallel claims in the UK and Singapore, this also involved negotiation with English solicitors.</li>

                    <li>	Assisting in a claim against a multi-national insurance company involving damaged cargo worth AUD 750,000.00 where the said cargo was different from the invoice and packing list provided to Surveyors. </li>

                    <li>	Advising client on the merits of commencing proceedings against a shipbroker hired by a well-known bank who advertised the sale of a ship causing loss USD 4 million and damages of $367,000 to client.</li>

                    <li>	Assisting counsel in drafting a Section 211B applications to the High Court and assisted counsel to prepare for winding up hearing in relation to a S$4 million credit facility granted by a bank. This included liaising with vendors regarding 211B (3) advertising requirements and gathering creditors support in accordance with IM Skaugen (2019) requirements. Also assisted client to draft relevant board resolutions for the company in this regard.</li>

                    <li>	Assisting counsel in defending multi-million dollar claims by multiple institutional lenders against a palm-oil trading company involving fraud perpetuated by external parties using, inter alia, duplicate bills of lading to execute fraudulent trades.</li>

                    <li>	Assisting counsel on a matter where the firm represented a fund manager and the directors of a private equity fund in relation to breach of directors’ duties and unlawful means conspiracy. The claims in question were in the region of S$6 million with unliquidated claims at S$40 million.</li>

                    <li>	Assisting counsel in reviewing contracts for a local corporate client involved in commercial acquisition by a German entity amounting to €3.3 million.</li>

                    <li>	Assisting counsel in conducting legal research on the law on love gifts and resulting trusts in relation to a claim valued at over S$3 million dollars. Also assisted counsel in interviewing client for an interrogatories application by the defendant and perused</li>
                                  documents for discovery in relation to the matter.

                <li>	Assisting on cross-border dispute by a financial education firm (part of a group listed on the Australian Securities Exchange) on the issue of breach of director duties and inducement of breach of contract.</li>

                    <li>	Advising and assisting on a claim by a private equity firm against one of the largest financial group in the European region with combined assets of S$2.3 trillion</li>

                    <li>	Defending a client (who used to be a director of a company once valued at US$300 million) against claims of misrepresentation valued at S$5 million brought by the owner of a company with a substantial stake in a listed company on the Hong Kong Stock Exchange</li>
                  </ul>



Past/Present Memberships and/or Directorships
Member, Law Society of Singapore (2020-present)
Member, Singapore Academy of Law (2020-present)

                          </div>
              </div>

            </div>
          </div></div>
        <div class="open" id="open11">
          <button class="cross" onClick={showoverlay.bind(null, "11")} >
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
        <div class="open" id="open12">
          <button class="cross" onClick={showoverlay.bind(null, "12")} >
            &#215;
                  </button>
          <div class="inner">
            <div class="position">
              Chia Cheok Sien<br />
                  Partner<br />
            </div>
            <div class="wrapper">
              <div class="left">
                Email: <a href="mailto:chia@unilegal.com.sg">chia@unilegal.com.sg</a><br />
              </div>
              <div class="right">
                Cheok Sien obtained his degree in Bachelor of Laws (Honours) from the National University of Singapore. He was admitted as an Advocate & Solicitor of the Supreme Court of Singapore in 1984.
                              <br /><br />
With extensive experience in litigation and dispute resolution, in addition to being legal counsel in transactional and corporate work, he is well placed to help you in legal matters.
                              <br /><br />
Besides being in private practice, he headed the legal department of SMIT SINGAPORE, an internationally renowned maritime services company as well as the Singapore Institute of Technology, one of the autonomous universities in Singapore.
                              <br /><br />
His current areas of focus include:
                              <ul><li>Dispute resolution (including civil & commercial litigation)</li>
                  <li>	Estate & trusts (including wills, probate, succession & wealth planning) matters</li>
                  <li>	Company & business law</li>
                  <li>	Insolvency work</li>
                  <li>	Personal injury & property damage </li>
                  <li>Real estate transactions & financing</li>
                  <li>Family & matrimonial matters</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        <div class="open" id="open13">
          <button class="cross" onClick={showoverlay.bind(null, "13")} >
            &#215;
                  </button>
          <div class="inner">
            <div class="position">
              Kunal Mirpuri<br />
                  Partner<br />
            </div>
            <div class="wrapper">
              <div class="left">
                Email: <a href="mailto:kmirpuri@unilegal.com.sg">kmirpuri@unilegal.com.sg</a><br />
                                          Tel: <a href="tel:+6562362436">+65 6236 2436</a><br />
                          Fax: <a href="tel:+6562261993">+65 6226 1993</a>

              </div>
              <div class="right">
                Kunal graduated from the University of Exeter in the United Kingdom with a Bachelor of Laws (Second Class Honours in the Upper Division) in 2017 and was admitted to the Singapore Bar as an Advocate and Solicitor of the Supreme Court in 2020. Prior to joining Unilegal LLC, Kunal trained at a boutique commercial litigation set, which was recently recognised by Asialaw Profiles 2021 as a Notable Firm for Dispute Resolution and recognised by the Straits Times Singapore as one of the Best Law Firms for 2021.
                <br /><br />
                Kunal’s main areas of practice include fraud and asset recovery, complex civil and commercial disputes (including but not limited to fraud, breach of director duties, negligence, economic torts, ship arrests, ship financing disputes, trade finance, construction disputes and banking litigation) and Restructuring/Insolvency (including debt restructuring, winding up, judicial management and schemes of arrangement), general corporate practice and financial services law and regulation.
                <br /><br />
                Kunal has experience in drafting legal documents such as Statement of Claims, Defences and affidavits for Interlocutory Applications. He is also experienced in offering commercially sound legal advice to clients, discussing tactical strategies and practical steps to be taken by them. He is well-versed in civil and criminal procedure, having had various experiences in these areas of law. A confident person, he is able to hold his own in client meetings and in the courtroom. He is also proficient in case file management and time management.
                <br /><br />
                Kunal is also fluent in both English and Hindi (both written and spoken).
                <br /><br />
                Some notable cases that Kunal has assisted in during his tenure as a trainee and associate include:
                <ul>
                  <li>	Advising a substantial shareholder of the manager of a listed REIT on the SGX (REIT valued at approximately US$1.27 billion as at listing date) </li>

                  <li>Assisting in a cross-border shareholder dispute amounting to over £700,000 involving a European hotel management company which manages brands such as Hyatt and the Marriot. As the client had parallel claims in the UK and Singapore, this also involved negotiation with English solicitors.</li>

                  <li>	Assisting in a claim against a multi-national insurance company involving damaged cargo worth AUD 750,000.00 where the said cargo was different from the invoice and packing list provided to Surveyors. </li>

                  <li>	Advising client on the merits of commencing proceedings against a shipbroker hired by a well-known bank who advertised the sale of a ship causing loss USD 4 million and damages of $367,000 to client.</li>

                  <li>	Assisting counsel in drafting a Section 211B applications to the High Court and assisted counsel to prepare for winding up hearing in relation to a S$4 million credit facility granted by a bank. This included liaising with vendors regarding 211B (3) advertising requirements and gathering creditors support in accordance with IM Skaugen (2019) requirements. Also assisted client to draft relevant board resolutions for the company in this regard.</li>

                  <li>	Assisting counsel in defending multi-million dollar claims by multiple institutional lenders against a palm-oil trading company involving fraud perpetuated by external parties using, inter alia, duplicate bills of lading to execute fraudulent trades.</li>

                  <li>	Assisting counsel on a matter where the firm represented a fund manager and the directors of a private equity fund in relation to breach of directors’ duties and unlawful means conspiracy. The claims in question were in the region of S$6 million with unliquidated claims at S$40 million.</li>

                  <li>	Assisting counsel in reviewing contracts for a local corporate client involved in commercial acquisition by a German entity amounting to €3.3 million.</li>

                  <li>	Assisting counsel in conducting legal research on the law on love gifts and resulting trusts in relation to a claim valued at over S$3 million dollars. Also assisted counsel in interviewing client for an interrogatories application by the defendant and perused</li>
                                  documents for discovery in relation to the matter.

                <li>	Assisting on cross-border dispute by a financial education firm (part of a group listed on the Australian Securities Exchange) on the issue of breach of director duties and inducement of breach of contract.</li>

                  <li>	Advising and assisting on a claim by a private equity firm against one of the largest financial group in the European region with combined assets of S$2.3 trillion</li>

                  <li>	Defending a client (who used to be a director of a company once valued at US$300 million) against claims of misrepresentation valued at S$5 million brought by the owner of a company with a substantial stake in a listed company on the Hong Kong Stock Exchange</li>
                </ul>



                <div>Past/Present Memberships and/or Directorships</div><br />
Member, Law Society of Singapore (2020-present)<br />
Member, Singapore Academy of Law (2020-present)

              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default warrantyRequestPage
