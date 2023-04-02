import React, { useState } from "react";
import styles from "./NewsAndHighlights.module.css";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

function NewsAndHighlights() {
  const [accordions, setAccordions] = useState([
    {
      id: 1,
      question: "French Parliamentarians visit ISRO",
      answer:
        "French delegation of the Parliamentary Standing Committee on Foreign Affairs of the French National Assembly led by the Committee’s President H E Mr. Jean-Louis Bourlanges visited ISRO Headquarters on March 16, 2023, as part of its overall India visit coordinated by the Ministry of External Affairs.",
      isOpen: false,
    },
    {
      id: 2,
      question:
        "Chandrayaan-3 successfully undergoes Integrated Module Dynamic Tests",
      answer:
        "In yet another milestone, Chandrayaan-3 spacecraft successfully completed the essential tests that validated its capability to withstand the harsh vibration and acoustic environment that the spacecraft would face during its launch. These tests were conducted during the first week of March 2023 at the test facilities located at the UR Rao Satellite Centre in Bengaluru.",
      isOpen: false,
    },
    {
      id: 3,
      question: "Yuva Vigyani Karyakram (YUVIKA) - 2023 is announced",
      answer:
        "Indian Space Research Organisation is organising a special programme for School Children called Young Scientist Programme - YUva VIgyani KAryakram, YUVIKA, to impart basic knowledge on Space Technology, Space Science and Space Applications to the younger students in emerging trends in space science and technology amongst the youngsters, who are the future building blocks of our nation.",
      isOpen: false,
    },
    {
      id: 4,
      question: "Inauguration of India – Bhutan SAT ground station",
      answer:
        "On March 13th, 2023, Bhutan Sat at Thimphu was inaugurated. This ground station will enable Bhutan to receive data from India-Bhutan SAT, pertaining to its territory, directly from the satellite and process in real-time.",
      isOpen: false,
    },
    {
      id: 5,
      question: "CEO, Saudi Space Commission met Chairman ISRO/ Secretary DOS",
      answer:
        "H.E. Dr. Mohammed Saud Altamaimi, CEO of Saudi Space Commission (SSC) visited ISRO HQ, Bengaluru on March 09, 2023 and had a meeting with Mr Somanath S, Chairman ISRO/ Secretary Department of Space (DOS). Saudi Arabia’s recent initiatives and future plan in space activities and associated collaboration opportunities were discussed during this meeting.",
      isOpen: false,
    },
    {
      id: 6,
      question: "NISAR (NASA – ISRO Synthetic Aperture Radar) Satellite Update",
      answer:
        "The integrated payload of NISAR comprising ISRO’s S-band Radar and NASA’s L-band Radar reached Bengaluru in the early hours of March 6, 2023 and moved to UR Rao Satellite Centre, Bengaluru for carrying out further testing and assembly with ISRO’s satellite bus",
      isOpen: false,
    },
    {
      id: 7,
      question: "Megha-Tropiques-1 Controlled Re-entry Successful",
      answer:
        "The controlled re-entry experiment for the decommissioned Megha-Tropiques-1 (MT-1) was carried out successfully on March 7, 2023. The satellite was launched on October 12, 2011, as a collaborative effort between ISRO and the French space agency CNES for carrying out tropical weather and climate studies. Since August 2022, the satellite's perigee was progressively lowered through a series of 20 manoeuvres spending about 120 kg of fuel.",
      isOpen: false,
    },
    {
      id: 8,
      question:
        "ISRO conducts Rail Track Rocket Sled deployment tests of the Gaganyaan Pilot",
      answer:
        "ISRO conducted the Rail Track Rocket Sled deployment tests of the Gaganyaan Pilot and Apex Cover Separation (ACS) parachutes in cluster configurations at the Terminal Ballistics Research Laboratory (TBRL), Chandigarh, on March 1 and 3, 2023. The first test simulated the clustered deployment of two pilot parachutes. One parachute was subjected to a minimum angle with respect to flow conditions and the second parachute was subjected to a maximum angle with respect to flow. These pilot parachutes are used in the Gaganyaan mission to extract and deploy the main parachutes independently.",
      isOpen: false,
    },
    {
      id: 9,
      question: "Controlled Re-entry Experiment of Megha-Tropiques-1",
      answer:
        "ISRO is gearing up for a challenging experiment of controlled re-entry of a decommissioned low Earth orbiting satellite, namely Megha-Tropiques-1 (MT1), on March 7, 2023. MT1 was launched on October 12, 2011, as a joint satellite venture of ISRO and the French space agency, CNES for tropical weather and climate studies. Although the mission life of the satellite originally was to 3 years, the satellite continued to provide valuable data services for more than a decade supporting regional and global climate models till 2021.",
      isOpen: false,
    },
    {
      id: 10,
      question: "SARAL completes a decade of service and continuing",
      answer:
        "SARAL (Satellite with ARgos and ALtika) is an Indo-French cooperative mission. ISRO has provided the small satellite bus platform to which CNES payload composed of ARGOS-3 and AltiKa instruments (altimeter, radiometer, DORIS, LRA) are integrated. SARAL was launched on February 25, 2013, from SDSC-SHAR, Sriharikota onboard PSLV-C20. The intended mission life was 5 years.",
      isOpen: false,
    },
    {
      id: 11,
      question:
        "Inauguration of Two-Day National Conference on Polymeric Materials",
      answer:
        "Shri. S Somanath, Chairman, ISRO & Secretary, DOS inaugurated the Two-day National Conference on New Developments in Polymeric Materials, DPM 2023, organized by the Thiruvananthapuram Chapter of The Society for Polymer Science, India. The Chairman remarked that the conference is rich with its scientific content through its aptly chosen technical sessions on various advanced topics in polymeric science. During his inaugural address, he highlighted that polymeric systems have plenty of applications in space technology, encompassing microelectronics, electronic packaging, composite structures, sealing systems for liquid fuels, binders for solid propellants, adhesives, insulation systems, solar cells, batteries and antennas for rockets, launch vehicles, and satellites.",
      isOpen: false,
    },
    {
      id: 12,
      question: "A Comprehensive 3D Thermophysical Model for the Moon",
      answer:
        "Surface and subsurface temperatures of the Moon are dictated by a complex interplay of several dependent parameters and therefore exhibit a significant variation both at local and regional scales. Knowledge of these temperature variations and thermophysical characteristics of the Moon is an important aspect for its scientific understanding (geophysical characterisation and thermal evolution). Such an information is also essential for planning future in-situ experiments, resource utilisation and even human exploration of the Moon.",
      isOpen: false,
    },
    {
      id: 13,
      question:
        "Successful Flight Acceptance Hot Test of CE-20 for LVM3-M4 Mission",
      answer:
        "The flight acceptance hot test of the CE-20 cryogenic engine that will power the Cryogenic Upper Stage of the LVM3 launch vehicle for the Chandrayaan-3 Mission was successfully conducted on February 24, 2023 at the ISRO Propulsion Complex, Mahendragiri in Tamil Nadu. The hot test was carried out for a planned duration of 25 seconds at the High Altitude Test Facility. All the propulsion parameters during the test were found satisfactory and closely matched with predictions. The cryogenic engine will be further integrated with the propellant tanks, stage structures and associated fluid lines to realise the fully integrated flight cryogenic stage.",
      isOpen: false,
    },
    {
      id: 14,
      question:
        "Simulated Crew Module Structure Assembly for Test Vehicle Mission",
      answer:
        "VSSC/ISRO received Simulated Crew Module (SCM) Structure Assembly for the Gaganyaan project. This is an unpressurised Crew module where the interfaces of major systems like parachute systems and pyros are simulated. Also the shape and outside mold line is simulated as per the Crewed mission configuration. For the Crewed mission, the Crew Module is a pressurized capsule and accommodates the astronauts during the Gaganyaan mission. This first indigenous simulated Crew module is developed by VSSC and realized by Manjira Machine Builders Pvt Ltd., Hyderabad.",
      isOpen: false,
    },
    {
      id: 15,
      question:
        "Ambassador of Argentina to India met Chairman, ISRO/ Secretary, DOS",
      answer:
        "H.E. Dr. Hugo Javier Gobbi, Ambassador of the Argentine Republic to India called on Shri Somanath S. Chairman, ISRO/ Secretary, Department of Space at ISRO Headquarters on February 22, 2023. The ongoing interactions between ISRO and Argentine Space Agency (CONAE) and potential opportunities for expanding space relations between India and Argentina (in view of space reforms announced by Government of India) were discussed during this meeting. Chairman, ISRO/ Secretary, Department of Space extended invitation to Argentine Ambassador to participate in the G20 Space Leaders Economy Meeting (SELM) Precursor event at Shillong in April 2023. Argentine Ambassador expressed interest of Argentine Minister of Science, Technology & Innovation to visit ISRO in July 2023.",
      isOpen: false,
    },
    {
      id: 16,
      question:
        "Announcement of soliciting proposals for AstroSat observatory time",
      answer:
        "This announcement is open to Indian scientists/researchers residing and working at Institutes/Universities/Colleges in India for 55% of time and to Non-Indian scientists/researchers,Non-Resident Indians (NRIs),working at space Agencies/Institutes/Universities/Colleges around the globe for 20% time, who are involved in research in the area of astronomy and are equipped to submit proposals as Principal Investigators (PIs) for specific target observations with necessary scientific and technical justification and can analyse the data, if the target is observed based on approvals.",
      isOpen: false,
    },
    {
      id: 17,
      question: "Chandrayaan-3 undergoes EMI/EMC test successfully",
      answer:
        "Chandrayaan-3 lander successfully underwent EMI/EMC test during Jan 31, 2023 - Feb 02, 2023, at U R Rao Satellite Centre, Bengaluru. EMI-EMC (Electro - Magnetic Interference/ Electro - Magnetic Compatibility) test is conducted for satellite missions to ensure the functionality of the satellite subsystems in the space environment and their compatibility with the expected electromagnetic levels. This test is a major milestone in the realization of the satellites. Chandrayaan-3 interplanetary mission has three major modules:the Propulsion module, Lander module, and Rover. The mission's complexity calls for establishing radio-frequency (RF) communication links between the modules.",
      isOpen: false,
    },
    {
      id: 18,
      question: "Chief of Defence Staff visit to ISRO Hq",
      answer:
        "Chief of Defence Staff, Gen. Anil Chauhan PVSM, AVSM, SM, VSM visited ISRO Hq, Antariksh Bhavan, Bengaluru on 16.02.2023 and held discussions with Shri S Somanath, Secretary, Department of Space / Chairman, ISRO and other officials of DOS and ISRO. The highlights of ISRO activities, programmes, applications across various sectors including Human Space Flight was presented by ISRO team.",
      isOpen: false,
    },
    {
      id: 19,
      question: "ISRO paving the way to Reduced Mortality Rates in Hospitals",
      answer:
        "Indian Space Research Organization (ISRO) since its inception, has been continuously working towards the betterment of the society, bringing socio-economic benefits to the public. Telemedicine using Communication Satellites offering the required health services to the needy in very remote locations, is one of societal applications having wider impact. The off-shoot of the knowledge developed at the organization has resulted in producing cost effective, efficient systems for regular use in various segments of the society. All this has been possible due to the involvement of different teams across the organization by implementing good quality practices right from the design phase itself. The home grown quality system has helped the organization in achieving repeated successes in managing critical projects and realizing complex missions. Leveraging the benefit of such a proven quality system for societal applications is very much advantageous.",
      isOpen: false,
    },
    {
      id: 20,
      question:
        "Group of lunar meteorites suggest a new scenario for the origin of lunar basalts",
      answer:
        "Moon's dark regions, visible to the naked eye, known as the 'mare', are remnants of a violent history of the Solar System. There are no records of these violent events on our dynamic Earth. Moon, having changed very little in the last billions of years, provides us a window to ponder over the past. The large mare regions on the near side of the Moon that we always see from Earth, mainly consists of basalts which are volcanic rocks. These regions hold the key to how the Moon cooled and evolved and what were the sources of heat that melted and crystallized the material to the present day rocks.",
      isOpen: false,
    },
    {
      id: 21,
      question: "US CDA Ambassador met Chairman, ISRO/ Secretary, DOS",
      answer:
        "United States Chargé d’Affaires (CDA) Ambassador Elizabeth Jones of US Embassy visited ISRO Headquarters/ DOS Secretariat on February 14, 2023 and had a meeting with Shri S. Somanath, Chairman, ISRO/ Secretary, DOS. US Consul General to Chennai Ms. Judith Ravin, Additional Secretary, DOS Ms. Sandhya Venugopal Sharma have also participated in this meeting. US participation in Aero India 2023, Recent visit of high level Indian delegation to USA; Visit of Chairman, ISRO/ Secretary, DOS to NASA centres & Caltech and meetings with US space entities; US officials’ participation in the upcoming Space Economy Leaders Meeting (SELM) of G20 at Shillong & Bengaluru; Opportunities for accelerated collaboration among space industries of both nations were the major highlights of the discussion.",
      isOpen: false,
    },
    {
      id: 22,
      question: "ISRO participation at India Pavilion, AeroIndia-2023",
      answer:
        "ISRO participated in the Indian Pavilion in AeroIndia-2023, Bengaluru from 13 to 17 February 2023. Keyspace technologies and equipment leveraging the defense space were showcased. Exhibits include SSLV, HRLV, Gaganyaan test vehicle, communication systems, and power systems. The Prime Minister of India was briefed by the Secretary, DOS /Chairman of ISRO on recent developments in space and critical technologies relevant to the defense space industry. DSA, ISpA, 25 start-ups, MSMEs, and corporates participated in the DefenceSpace Gallery.",
      isOpen: false,
    },
    {
      id: 23,
      question: "Commencement of Recovery trials for the Gaganyaan Mission",
      answer:
        "On February 7, 2023, ISRO, along with Indian Navy carried out initial recovery trials of Crew Module in the Water Survival Test Facility (WSTF) of the Indian Navy, at Kochi. The trials were part of the preparation for crew module recovery operations for the Gaganyaan mission that will be carried out in Indian waters with the participation of Indian Government agencies, the overall recovery operations being led by Indian Navy. A Crew Module Recovery Model (CMRM) that simulates the mass, center of gravity, outer dimensions, and externals of the actual Crew Module at touchdown was used for the trials. The sequence of operations required for the recovery of the Crew Module were carried out as part of the trials. As the safe recovery of the crew is the final step to be accomplished for any successful human spaceflight, it is of paramount importance and it has to be carried out with the minimum lapse of time. Hence the recovery procedures for various scenarios need to be extensively practiced by carrying out a large number of trials. The Standard Operating Procedures (SoP) for recovery of Crew and Crew Module need to be finalized. The recovery trials will be initially carried out in a closed pool followed by trials in a harbor and in the open sea.",
      isOpen: false,
    },
    {
      id: 24,
      question:
        "Successful test of Throttleable Vikas Engine for 67% Thrust level",
      answer:
        "Vikas engine has been the workhorse engine for the launch vehicles of ISRO. The engine with a nominal thrust of 80t is powering the second stages of PSLV & GSLV, liquid strapons of GSLV and the core liquid stage of LVM3. Liquid engines that support throttling of the engine thrust facilitate booster stage recovery in launch vehicles. In order to enable booster stage recovery in future launch vehicle configurations, the first Throttling demonstration hot test of the Vikas engine was successfully accomplished on January 30, 2023 for a targeted 67% thrust level throttling for a duration of 43 s. Throttling of the engine was achieved by a closed loop thrust regulation system and the engine had been successfully throttled from the chamber pressure of 58.5 bar in steps of 50 bar, 45 bar & 40 bar, with dwelling at each pressure level for 7 s. In addition, the Vikas engine was also throttled down to 45% for the last 3 s before the engine shut down.",
      isOpen: false,
    },
    {
      id: 25,
      question: "SSLV-D2/EOS-07 Mission",
      answer:
        "Small Satellite Launch Vehicle (SSLV) of ISRO is designed to be affordable and amenable to industry production and will function as a launch-on-demand platform for Mini, Micro or Nano satellites. It is a three-stage vehicle with all solid propulsion stages and liquid propulsion-based Velocity Trimming Module (VTM) as the terminal stage. The launcher also targets many novel features including low turn-around time, flexibility in accommodating multiple satellites, launch-on-demand, minimal launch infrastructure requirements, etc.",
      isOpen: false,
    },
    {
      id: 26,
      question: "IIA hands over VELC payload to ISRO",
      answer:
        "Indian Institute of Astrophysics (IIA), Bengaluru handed over Visible Line Emission Coronagraph (VELC) payload for Aditya-L1 mission to ISRO in a ceremony held on January 26, 2023 at the Centre for Research and Education in Science and Technology (CREST) Campus, Hosakote, near Bengaluru. VELC payload was designed and realised at CREST campus. The payload was handed over to Director, U R Rao Satellite Centre (USRC) by Director, IIA in the presence of Chairman, ISRO/ Secretary, DOS Shri S Somanth. Project Director of Aditya-L1 Smt. NigarShaji, and Principal Investigator of VELC Dr. B Raghavendra Prasad were present on the occasion. The payload would be integrated to the satellite at URSC.",
      isOpen: false,
    },
    {
      id: 27,
      question:
        "Ambassador of Costa Rica to India met Chairman, ISRO/ Secretary, DOS",
      answer:
        "H.E. Dr. Claudio Ansorena Montero, Ambassador of Costa Rica to India called on Shri S. Somanath, Chairman, Indian Space Research Organisation (ISRO)/ Secretary, Department of Space at ISRO Headquarters on January 09, 2023. Senior officials from ISRO, NSIL,IN-SPACe and DOS secretariat were present in the meeting. Ambassador has expressed keen interest in learning from India’s rich experience in the field of space. Opportunities for collaboration at industry level and also capacity building of officials from Costa Rica in satellite building and space technology application were discussed.",
      isOpen: false,
    },
    {
      id: 28,
      question: "Meeting of Space Agency Chiefs of India and Mexico",
      answer:
        "Shri S. Somanath, Chairman, ISRO/ Secretary, Department of Space (DOS) and Dr. Salvador Landeros Ayala, Director General of Mexican Space Agency (AEM) had a virtual meeting on December 21, 2022. Dr. Pankaj Sharma, Ambassador of India to Mexico and Mr. Gustavo A. Cabrera Rodriguez, Ambassador of Mexico for the Latin American and Caribbean Space Agency (ALCE) have also participated in the meeting. Both heads of the agencies discussed the ongoing cooperation activities mainly in earth observation. While thanking ISRO for developing a mobile application for forest fire monitoring and sharing it with Mexican Forest Department, AEM Chief sought India’s support in building and launching a remote sensing satellite for Mexico. ISRO will work on this proposal with MEA’s support. India’s interest in expanding space cooperation in the Latin American and Caribbean region through ALCE was also discussed.",
      isOpen: false,
    },
    {
      id: 29,
      question: "Successful CE-20 Engine Hot Test",
      answer:
        "CE-20 engine is successfully operated with a thrust level of 22t for a long duration of 650 s on December 23, 2022, at the Cryogenic Main Engine & Stage Test Facility of ISRO Propulsion Complex (IPRC), Mahendragiri, Tamil Nadu. With this, the engine qualification for 20 t thrust level is also successfully completed for induction in flight. The CE20 engine is designed and developed by Liquid Propulsion Systems Centre (LPSC), Valiamala, Kerala. The engine was operated with a 20.2t thrust level for the first 40 s, followed by an operation at 20t off-nominal zones) before operating it at 22.2 t for a duration of 435 s, by moving the thrust control valve. The mixture ratio and thrust control were in open-loop mode. During the test, the engine and the facility performed normally, and the required engine performance parameters were achieved as predicted. The engine used for this hot test had undergone 11 hot tests with a cumulative duration of 2720 s earlier. Thus, this engine has undergone 3370 s cumulative burn duration at different thrust & mixture ratio levels.",
      isOpen: false,
    },
    {
      id: 30,
      question: "Completion of third batch of UNNATI programme at URSC, ISRO",
      answer:
        "The third batch of UNispace Nanosatellite Assembly & Training by ISRO (UNNATI) by URSC/ISRO was conducted between October 15, 2022, and December 15, 2022. Thirty-one participants from 19 countries attended the training. A total of 107 lectures were organized in two major parts: 70 lectures on general satellite technology and 37 lectures on nanosatellite design and testing. The faculty comprised of experts from various centers of ISRO namely URSC, SAC, ISRO HQ, ISTRAC, and IISU. The lecture sessions, which began on October 17, 2022, got concluded with an interactive session chaired by Director, URSC on November 18, 2022.",
      isOpen: false,
    },
    {
      id: 31,
      question: "First blow down test of Trisonic Wind Tunnel at VSSC",
      answer:
        "The first blow down test of the newly realised Trisonic Wind Tunnel was held on 8th December, 2022 at Vikram Sarabhai Space Centre, Thiruvananthapuram. The Trisonic Wind Tunnel is a system to aid aerodynamic design of rockets and re-entry spacecrafts by characterizing a scaled model by evaluating forces, moments, load distribution, unsteady pressures, acoustic levels etc. The tunnel has an overall length of about 160m and has a maximum cross section of 5.4m. The tunnel can be used for testing various space vehicles in three flight regimes - below the speed of sound, at the speed of sound and above the speed of sound: hence the name trisonic wind tunnel. The tunnel can simulate flight conditions from 0.2 times the speed of sound (68 m/s) to 4 times the speed of sound (1360 m/s).",
      isOpen: false,
    },
    {
      id: 32,
      question: "EOS-06 images Cyclone Mandous and detects Algal Bloom",
      answer:
        "Cyclone Mandous is imaged by EOS-06. The image of the cyclone (above) is a combination of cloud structure captured by Ocean Colour Monitor (OCM) with wind vector data derived from the Scatterometer. High winds associated with the cyclone centre could be well-captured due to a unique combination of optical and microwave remote sensing-based data.",
      isOpen: false,
    },
    {
      id: 33,
      question: "Rocket motor Produced by Industry Successfully tested",
      answer:
        "The first PS OM XL motor, which forms the PS0 stage of PSLV-XL, produced by Economic Explosives Ltd., Nagpur is tested at SDSC, SHAR today. The performance is satisfactory. VSSC/ISRO had transferred the technology to Economic Explosives Ltd., Nagpur in 2019. With today's test, the industry's capability to produce the PS0 stage for PSLV is established. This is the first step in the end-to-end production of PSLV through Industry. ",
      isOpen: false,
    },
    {
      id: 34,
      question:
        "ISRO and Social Alpha join hands to establish SpaceTech Innovation Platform",
      answer:
        "Indian Space Research Organisation (ISRO) and Social Alpha today signed an MoU to launch SpaceTech Innovation Network (SpIN), India’s first dedicated platform for innovation curation and venture development for the burgeoning space entrepreneurial ecosystem. A one-of-its-kind public-private collaboration for start-ups and SMEs in the space industry, this novel partnership is a significant step forward in providing further stimulus to India’s recent space reform policies and will work towards identifying and unleashing the market potential of the most promising space tech innovators and entrepreneurs in India. SpIN will primarily focus on facilitating space tech entrepreneurs in three distinct innovation categories: Geospatial Technologies and Downstream Applications; Enabling Technologies for Space & Mobility; and Aerospace Materials, Sensors, and Avionics.",
      isOpen: false,
    },
    {
      id: 35,
      question:
        "Ambassador of Czech Republic to India met Chairman, ISRO/ Secretary, DOS",
      answer:
        "H.E. Dr. EliskaZigova, Ambassador of the Czech Republic to India called on Shri S. Somanath, Chairman, Indian Space Research Organisation (ISRO)/ Secretary, Department of Space at ISRO Headquarters on December 01, 2022.Director of Department of Foreign Economic Policies in Czech Ministry of Industry and Trade and Honorary Consul of the Czech Republic in Bengaluru accompanied the Ambassador. Ambassador of the Czech Republic to India expressed keen interest in enabling space industry level collaboration between the two nations and invited an Indian space delegation to Czech Republic to visit and interact with Czech Space institutes and industries. While agreeing to work on this, Chairman, ISRO/ Secretary, DOS highlighted on the space reforms and the emerging space ecosystem in India that could contribute not only to Indian space programme but also to the global space activities.",
      isOpen: false,
    },
    {
      id: 36,
      question: "Meeting of Chairman, ISRO/Secretary DOS and Bhutan Minister",
      answer:
        "Mr. S. Somanath, Chairman, ISRO/ Secretary, DOS, and H.E. Lyonpo Mr. Karma Donnen Wangdi, Minister, Ministry of Information and Communication, Royal Government of Bhutan, had a meeting on November 25, 2022, during the Minister’s visit to ISRO’s Satish Dhawan Space Centre, Sriharikota (SDSC-SHAR) to witness the launch of India-Bhutan SAT (INS-2B) in PSLV-C54/EOS-6 mission. Directors of ISRO Centres, the Ambassador of Bhutan to India, and other Bhutan delegation members attended the meeting.",
      isOpen: false,
    },
    {
      id: 37,
      question:
        "First private launchpad & mission control center made in ISRO campus at SDSC",
      answer:
        "A private launchpad and mission control center is established within the ISRO campus at Satish Dhawan Space Center (SDSC),SHAR, Sriharikota, for the first time. The launchpad is designed and operated by a private company, an Indian space-tech start-up, Agnikul. The facility was inaugurated on November 25, 2022 by Shri S. Somanath, Chairman, ISRO & Secretary, Department of Space (DOS). Senior ISRO officials including the directors of various ISRO centers also attended the function. On the occasion, Shri.S.Somanath expressed pleasure over the establishment of the first private launch pad in the country and endorsed that, now, India can travel to space from one more space platform.",
      isOpen: false,
    },
    {
      id: 38,
      question:
        "Shri Ram Nath Kovind witnesses the 200th successful launch of RH200",
      answer:
        "In a historic moment witnessed by Shri Ram Nath Kovind, Honourable former President of India, Shri S Somanath, Secretary DoS, Chairman, ISRO, and invited guests, RH200 - the versatile sounding rocket of ISRO, registered its 200th consecutive successful launch from the shores of Thumba at TERLS marking the celebrations 200. In a function held at Dr Srinivasan auditorium, Vikram Sarabhai Space Centre Shri Ram Nath Kovind addressed the VSSC community. The Hon’ble former President recollected the significant contributions of the pioneers in Indian Space Research including that of Dr Vikram Sarabhai, Prof Satish Dhawan and Dr APJ Abdul Kalam.",
      isOpen: false,
    },
    {
      id: 39,
      question:
        "ISRO Completes Major Development Test of its Gaganyaan Parachute System",
      answer:
        "On Friday, Vikram Sarabhai Space Centre, where many Gaganyaan activities are progressing, conducted a major development test “Integrated Main Parachute Airdrop Test, or IMAT “ of its crew module deceleration system at the Babina Field Fire Range (BFFR) in the Jhansi district of Uttar Pradesh. This test marks a significant milestone toward realizing the nation's ambitious Gaganyaan project.",
      isOpen: false,
    },
    {
      id: 40,
      question: "Successful Launch of Mission Prarambh",
      answer:
        "The launch of Vikram-S, a suborbital launch vehicle from M/s Skyroot Aerospace Pvt. Ltd., Hyderabad, was accomplished successfully on November 18, 2022, at 11:30 am IST from the sounding rocket launch complex at Satish Dhawan Space Centre, Sriharikota. It marks the first launch of a launch vehicle built by a private company in India. The mission was authorized by IN-SPACe.",
      isOpen: false,
    },
    {
      id: 41,
      question:
        "Chairman, ISRO inaugurated the new office of M/s Bellatrix Aerospace",
      answer:
        "Bellatrix, an IISc incubated space Start-up instituted in 2015 and engaged in development of propulsion systems, has developed mono-propellant thrusters, green propellants and electric thrusters. With a plan to diversify the products into orbital transfer vehicles and other advanced electric propulsion technologies, the company recently signed an agreement with Government of Karnataka to invest to the extent of $76 M in setting up a world-class space factory in Bangalore. During the inauguration, the company also entered into agreements with additive manufacturing companies to work on technologies for in-space manufacturing.",
      isOpen: false,
    },
    {
      id: 42,
      question:
        "ISRO delivered Flight Termination System (FTS) packages to Agnikul",
      answer:
        "Agnikul Cosmos, a space technology startup based in Chennai, received its first flight termination system (FTS) on 7 November 2022, from ISRO, with the support of IN-SPACe. The official handing over event happened marking the culmination of multiple rounds of interactions about interfacing, handling and using these systems on Agnikul's launch vehicle Agnibaan, in the presence of Director, VSSC and IN-SPACe teams.",
      isOpen: false,
    },
    {
      id: 43,
      question:
        "Successful CE20 uprated Engine Hot Test with 21.8 T vacuum thrust",
      answer:
        "Successful CE20 uprated Engine Hot Test with 21.8 T vacuum thrust The CE20 cryogenic engine indigenously developed for LVM3 has been subjected to a successful hot test at an uprated thrust level of 21.8 tonnes for the first time on November 9, 2022. This will enhance the LVM3 payload capability up to 450 kg with additional propellant loading. The major modification carried out on this test article compared to previous engines was the introduction of a Thrust Control Valve (TCV) for thrust control. In addition to this 3D-printed LOX and LH2 turbine, exhaust casings were inducted into the engine for the first time. During this test the engine operated with ~20 t thrust level for the first 40s, then the thrust level was increased to 21.8t by moving the thrust control valve. During the test, engine and facility performance was normal and the required parameters were achieved.",
      isOpen: false,
    },
    {
      id: 44,
      question:
        "ISRO facilitates the hot testing of engine dev by Indian space startup",
      answer:
        "Vikram Sarabhai Space Centre (VSSC), the lead Centre of ISRO for the development of launch vehicles, facilitated the hot testing of a rocket engine developed by an Indian space start-up. VSSC successfully conducted the 15 s hot test of Agnilet Engine for M/s Agnikul Cosmos Pvt. Ltd. on November 4, 2022 at its Vertical Test Facility, Thumba Equatorial Rocket Launching Station (TERLS), Thiruvananthapuram. The test was carried out as part of MOU signed between ISRO and M/s Agnikul Cosmos Pvt. Ltd. to provide opportunity for Indian space start-ups to use facilities of ISRO through IN-SPACe.",
      isOpen: false,
    },
    {
      id: 45,
      question: "Atmospheric Re-entry of RISAT-2",
      answer:
        "RISAT-2 was launched on 20 April 2009 by PSLV-C12 launch vehicle in an inclined eccentric orbit of 41.2deg inclination with Perigee altitude 400 Km and Apogee altitude 550 Km.Weighing only about 300 kg, the satellite has now made an uncontrolled re-entry into the Earth’s atmosphere at the predicted impact point in Indian Ocean near Jakarta on 30th October 2022 00:06 UTC with an uncertainty of ±10 minutes. RISAT-2 Satellite carried 30 Kg fuel for an initial designed life of 4 years. With the proper maintenance of orbit and mission planning by the spacecraft operations team in ISRO, by economical usage of fuel RISAT-2 provided very useful payload data for 13 years. Since its injection RISAT-2’s radar payload services were provided for various space applications. On re-entry, there were no fuel left in the satellite and hence there are no contaminations or explosion by fuel is expected.Studies confirmed that the pieces generated due to aero-thermal fragmentation would not have survived re-entry heating and hence no fragments would have impacted on Earth.",
      isOpen: false,
    },
    {
      id: 46,
      question:
        "CE20 Cryogenic Engine for the next mission of LVM3 tested for acceptance",
      answer:
        "The flight acceptance hot test of a CE-20 engine is successfully carried out for a duration of 25 s in the High Altitude Test facility of ISRO Propulsion Complex at Mahendragiri on October 28, 2022. This engine is earmarked for the LVM3-M3 mission identified for the launch of the next set of 36 numbers of OneWeb India-1 satellites. The cryogenic upper stage of the LVM3 vehicle (C25 stage) is powered by a CE-20 engine working with the LOX-LH2 propellants combination. This engine develops a nominal thrust of 186.36 kN in vacuum.",
      isOpen: false,
    },
    {
      id: 47,
      question: "LVM3 M2 / OneWeb India-1 Mission successful",
      answer:
        "In its second operational flight, LVM3 launch vehicle placed 36 satellites of OneWeb to their intended orbits taking off at 0007 Hrs. on October 23, 2022, from the second launch pad at Satish Dhawan Space Centre, Sriharikota, Andhra Pradesh. This was the fifth flight of LVM3. This was a dedicated commercial mission for a foreign customer through NSIL. A total of 36 OneWeb Gen-1 satellites of about 150 kg each totaling about 5,796 kg were launched to a circular low-earth orbit of about 601 km with a 87.4 degree inclination.The separation of satellites involved a unique maneuver of the cryogenic stage to orientation and re-orientation covering 9 phases spanning 75 minutes.OneWeb confirmed the acquisition of signals from the satellites.",
      isOpen: false,
    },
    {
      id: 48,
      question:
        "Dr. Sankarasubramanian K. as the Principal Scientist of Aditya-L1 mission",
      answer:
        "Dr. Sankarasubramanian K. is a senior solar scientist at the U R Rao Satellite Centre (URSC), Bengaluru. He obtained his PhD in Physics from Bangalore University through the Indian Institute of Astrophysics, Bengaluru. His research areas of interest are the Solar Magnetic field, Optics, and Instrumentation. He has contributed to AstroSat, Chandrayaan-1 and Chandrayaan-2 missions of ISRO in several capacities. Currently, he is heading the Space Astronomy Group (SAG) of URSC. SAG is involved in developing scientific payloads for the upcoming missions of Aditya-L1, XPoSat, and science payload onboard the Chandrayaan-3 propulsion module. He is also the Principal Investigator for one of the X-ray payloads onboard Aditya-L1. Dr. Sankarasubramanian K also heads the Aditya-L1 Science Working Group, which has members from several institutes of India engaged in solar science research.",
      isOpen: false,
    },
    {
      id: 49,
      question: "Two days conference on Celebrating Seven Years of AstroSat",
      answer:
        "AstroSat, India’s first dedicated multi-wavelength observatory mission has completed seven years in orbit in September 2022. To celebrate the event ISRO has organised a two day conference on September 28-29, 2022 providing a platform for astronomers to share their findings from AstroSat. The event witnessed active participation from several research institutes and academia including IITs, TIFR, IUCAA, BITS, NITs, many universities and private research institutes and several ISRO centers and units. The event was live-streamed both on the ISRO webpage and on social media platforms.",
      isOpen: false,
    },
    {
      id: 50,
      question: "X-rays from the Moon reveal a new lunar map in sodium",
      answer:
        "The X-ray spectrometer CLASS on the Chandrayaan-2 Orbiter has mapped the abundance of sodium on the Moon for the first time. The serene radiance that fills the vast expanse of a night sky is the reflection of sunlight from the Moon's surface, a major part of which is from the bright lunar highlands. The rock and soil samples that the Apollo 11 astronauts brought to Earth showed that these regions which are remnants of an ancient lunar crust, are mainly composed of silicate minerals in the group plagioclase feldspar series. While these are common minerals found on Earth, lunar samples have a variety of the mineral that contain more of the element Calcium than Sodium (which is an alternative) following the general trend in compositional differences between Earth and Moon. A loss of volatile elements including alkalis like sodium and potassium on the Moon could be traced back to the time when Earth and Moon formed together in a Solar system that was young and fiery.",
      isOpen: false,
    },
    {
      id: 51,
      question:
        "Update on the Mars Orbiter Mission (MOM) and the National Meet",
      answer:
        "On September, 27, 2022, ISRO had organized a one day National meeting to commemorate the Mars Orbiter Mission, on the event of completion of its eight years in the Martian orbit. The event witnessed active participation from several academic and research institutes, that included IISc, Bangalore, Bangalore University, NIT-Rourkela, Tripura University, Gorakhpur University, to name a few, as well as the centres and units of ISRO/DOS. The event was live-streamed to the ISRO website, and the ISRO social media platforms.",
      isOpen: false,
    },
    {
      id: 52,
      question:
        "ISRO Scientist elected as VP of International Astronautical Federation (IAF)",
      answer:
        "Dr. A K Anil Kumar, SeniorScientist in ISRO is elected as the Vice President of the International Astronautical Federation (IAF) during its Annual Conference International Astronautical Congress (IAC) 2022 held in Paris during 18-22 September 2022. Founded in 1951, the International Astronautical Federation (IAF) is the world's leading space advocacy body with 433 members in 72 countries, including all leading space agencies, companies, research institutions, universities, societies, associations, institutes, and museums worldwide.IAF actively encourages the development of astronautics for peaceful purposes and supports the dissemination of scientific and technical information related to space.Dr. A K Anil Kumar, currently Associate Director, ISTRAC, Bengaluru has been leading the ISRO activities for safe & sustainable space operations Management. It is a recognition of ISRO's space endeavors and helps in promoting international collaboration.",
      isOpen: false,
    },
    {
      id: 53,
      question:
        "Inauguration of Integrated Cryogenic engine Manufacturing Facility (ICMF)",
      answer:
        "Today, Hon’ble The President of India inaugurated the integrated cryogenic engine manufacturing facility (ICMF) at HAL, Bengaluru, in the august presence of Hon’ble Governer and Hon’ble Chief Minister of Karnataka, Hon'ble minister of state for health and family welfare Dr. Bharati Pawar, Dr. K Sudhakar, minister of health and family welfare, Karnataka, CMD, HAL and, Chairman, ISRO/ Secretary, DoS. ICMF is established in Bengaluru by HAL to realise the cryogenic and semi-cryogenic engines required for the Indian space programme with a project cost of Rs. 208 crores. ICMF caters to manufacture and assembly of the engines under one roof. The facilities house many indigenous fabrication equipment, machinery, and surface treatment utilities.",
      isOpen: false,
    },
    {
      id: 54,
      question: "ISRO develops microprocessor-controlled smart limbs",
      answer:
        "As a spin-off of Space technology, ISRO develops an intelligent artificial limb likely to be commercialised soon, expectedly cheaper by about ten times, benefitting above-knee amputees to walk with a comfortable gait. These ‘microprocessor-controlled knees (MPKs)’ offer extended capabilities for the amputee than those offered by the passive limbs that do not use the microprocessors. Thus far, a 1.6 kg MPK has enabled an amputee to walk about 100 m in the corridor with minimum support. Efforts to improvise the performance are underway. These smart MPKs are being developed by Vikram Sarabhai Space Centre (VSSC), ISRO under an MoU with National Institute for Locomotor disabilities (NILD), Pt. Deendayal Upadhyaya National Institute for Persons with Physical Disabilities (Divyangjan) (PDUNIPPD (D)), and Artificial Limb Manufacturing Corporation of India (ALIMCO).",
      isOpen: false,
    },
  ]);

  const handleAccordionClick = (id) => {
    setAccordions(
      accordions.map((accordion) => {
        if (accordion.id === id) {
          accordion.isOpen = !accordion.isOpen;
        }
        return accordion;
      })
    );
  };
  return (
    <div className={styles.MainContainer}>
      <div className={styles.NAHGridContainer}>
        <div>
          <h4>Latest News</h4>
          <div className={styles.MainAccordianContainer}>
            {accordions.map((accordion) => (
              <div
                className={styles.AccordianMappedContainer}
                onClick={() => handleAccordionClick(accordion.id)}
                key={accordion.id}
              >
                <div className={styles.SingleAccordianContainer}>
                  <p>{accordion.question}</p>
                  <span className={styles.ButtonContainer}>
                    {accordion.isOpen ? (
                      <RemoveRoundedIcon />
                    ) : (
                      <AddRoundedIcon />
                    )}
                  </span>
                </div>
                {accordion.isOpen && (
                  <div className={styles.AnswerContainer}>
                    <p>{accordion.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.HighlightsContainer}>
          <h4>Highlights</h4>
          <div
            className={styles.TrainingProgramsContainer}
            style={{
              backgroundColor: "black",
              borderRadius: "10px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            }}
          >
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-interval="5000">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    style={{
                      height: "auto",
                      opacity: "75%",
                      backgroundSize: "contain",
                      padding: "1rem",
                    }}
                    src="https://static.businessworld.in/article/article_extra_large_image/1632564416_Jzk0PW_sabka_saath_sab_ka_wikas.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    style={{
                      height: "auto",
                      opacity: "75%",
                      backgroundSize: "contain",
                      padding: "1rem",
                    }}
                    src="https://www.globaltimes.cn/Portals/0/attachment/2020/2020-07-23/afdc86f9-1645-4189-a1eb-e3bc92415c07.jpeg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    style={{
                      height: "auto",
                      opacity: "75%",
                      backgroundSize: "contain",
                      padding: "1rem",
                    }}
                    src="http://www.globaltimes.cn/Portals/0/attachment/2020/2020-11-21/12b23bbc-c102-4e8a-9c03-98895d3a0dfd.jpeg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsAndHighlights;
