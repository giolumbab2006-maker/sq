/* ============================================================
   SIQUIJOR TOURISM — app.js  (Enhanced Professional Edition)
   ============================================================ */

/* ------------------------------------------------------------------
   DATA: Destinations
   ------------------------------------------------------------------ */
const destinationsData = [
    {
        id: 1, name: "Cambugahay Falls", municipality: "Lazi",
        category: "Waterfall",
        image: "https://dailytravelpill.com/wp-content/uploads/2019/12/cambugahay-falls-drone-view-siquijor.jpg",
        shortDescription: "A legendary clear 3-tiered cascading azure waterfall perfect for warm canopy rope swings.",
        fullDescription: "Cambugahay Falls consists of multi-tiered crystal-clear natural spring waters originating from upstream watersheds. It is universally celebrated for its emerald-green lagoons and signature Tarzan-style vine swinging boards over standard swimming plunge pools.",
        entranceFee: "PHP 50 parking/environmental fee",
        openingHours: "7:00 AM – 5:00 PM Daily",
        activities: "Rope swinging, bamboo rafting, natural stream swimming, canyon photography.",
        bestTime: "November to May — dry season when water turns distinctively crystal turquoise blue.",
        travelTips: "Arrive early around 7:30 AM to beat tourist vans and bring water shoes to comfortably navigate slippery stone tiers safely."
    },
    {
        id: 2, name: "Paliton Beach", municipality: "San Juan",
        category: "Beach",
        image: "https://i.redd.it/01z38bzxpq1e1.jpeg",
        shortDescription: "The Boracay of Siquijor features powdery sand, palm canopies, and iconic sunsets.",
        fullDescription: "Paliton Beach is a pristine stretch of powdery white sand lined with dramatic, leaning coconut palms. Known as the premier sunset viewpoint of the province, it features ultra-clear tropical waters and marine sanctuaries positioned just a short swim off-shore.",
        entranceFee: "Free (Donations welcome for community sweepers)",
        openingHours: "24/7 Accessible — best visits from 4:00 PM onwards.",
        activities: "Sunset watching, beach lounging, artisanal cocktail drinking, stand-up paddleboarding.",
        bestTime: "Year-round during clear sky afternoons.",
        travelTips: "Local vendors sell fresh Buko Halo-Halo directly on the beach line. Grab one before the sunset sky turns magenta red."
    },
    {
        id: 3, name: "Lazi Church & Convent", municipality: "Lazi",
        category: "Historical Site",
        image: "https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/539338292_1131831848802689_2816373704445811721_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGNUIDeyCNi56AFCbWbit8Vfez0haqu1AF97PSFqq7UAS_WBA0meaIHrYHtiAbcjJF5PTtFQZO8b0_UcPNE2cv8&_nc_ohc=Vh61Uac03wUQ7kNvwFqO9Nj&_nc_oc=AdqJI9-aLomwMJTXyXNlRhgHgQbVtAun3ouqBS_kCV4wK1RqVA7HphVLKG_5vrPDt8IXmmA14C-kVNrdH2nidgiy&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&_nc_gid=ANohDpm72CXAOqp8OwKNcA&_nc_ss=7b2a8&oh=00_Af6zyWmT0N3dmYzwom68OoNrxldvm4gC0_oMpPjj9CkHYA&oe=6A1422F4",
        shortDescription: "One of the largest neoclassical coral stone sanctuaries built in Asia during 1884.",
        fullDescription: "The San Isidro Labrador Parish Church and Convent (Lazi Church) was constructed by Augustinian Recollects utilizing marine coral stones and local hardwood. The adjacent convent stands as one of the largest timber-framed ecclesiastical colonial rectories in the Far East.",
        entranceFee: "PHP 20 (Convent museum structural maintenance)",
        openingHours: "8:00 AM – 5:00 PM Daily",
        activities: "Historical architecture tours, visiting the religious antiquities gallery museum, silent prayer.",
        bestTime: "Morning hours before afternoon heat sets in.",
        travelTips: "Dress appropriately in respectful attire before entering the historical Catholic interior sanctuary sections."
    },
    {
        id: 4, name: "Salagdoong Beach", municipality: "Maria",
        category: "Adventure",
        image: "https://siquijordirectory.com/wp-content/uploads/2018/07/salagdoong-2.jpg",
        shortDescription: "Adrenaline cliff-jumping platforms leading straight into clear open ocean channels.",
        fullDescription: "Salagdoong Beach features a distinct massive coral rock promontory splitting two sandy beach coves. Built into the high rock face are dedicated 20-foot and 35-foot extreme cliff jumping platforms launching directly over deep, blue marine water chutes.",
        entranceFee: "PHP 100 per person",
        openingHours: "6:00 AM – 6:00 PM Daily",
        activities: "High altitude cliff-diving, water slide riding, seaside beach picnics, coastal snorkeling.",
        bestTime: "High tide sequences — check local coast tables for safety depths before jumping.",
        travelTips: "Always consult the guarding municipal lifeguards on site regarding accurate water current levels prior to performing jumps."
    },
    {
        id: 5, name: "Century-Old Balete Tree", municipality: "Lazi",
        category: "Historical Site",
        image: "https://scontent.fceb6-4.fna.fbcdn.net/v/t39.30808-6/490357473_1245868427544609_228877116059400330_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFeAd-etRk7oDYdc1WwxBIzM34Bp7dFEtgzfgGnt0US2KQAWih4N6TXmsGEM902ayWcBPARXr3q6wkP70pN8iYK&_nc_ohc=rnxFGJJQGVYQ7kNvwFJwKFO&_nc_oc=AdoSgX1eysMtq7xjblX2KX7lNG9XKE7Q8ko5DykgjjTLIRo80Rpsqhdjya0ikirVo7lnF9BoZ3NSO5ch8pVJN6MC&_nc_zt=23&_nc_ht=scontent.fceb6-4.fna&_nc_gid=M6er8a5QeSwge14wpTjtxw&_nc_ss=7b2a8&oh=00_Af4qkLCjlH7zEV_aBc15_zCfCklRZYH0cec28jRfSfS6GA&oe=6A1406EB",
        shortDescription: "A mystical 400-year-old sacred banyan tree containing an organic freshwater fish spa.",
        fullDescription: "This colossal 400-year-old Balete (Banyan) tree is wrapped in local mystical folklore. An underground natural spring emerges natively from its roots directly feeding into a built concrete basin pool teeming with skin-exfoliating doctor fish.",
        entranceFee: "PHP 20 per individual",
        openingHours: "6:00 AM – 6:00 PM Daily",
        activities: "Fish spa therapy, souvenir shopping, evaluating rare native orchids growing on root chambers.",
        bestTime: "Midday to relax under refreshing canopy shade configurations.",
        travelTips: "Dip your feet calmly into the root pool and let the natural cleaning fish eat dead skin layers away for a unique tingling sensation."
    },
    {
        id: 6, name: "Mount Bandilaan", municipality: "San Juan",
        category: "Mountain",
        image: "https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/632462483_1330587689101239_5184429872404110484_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHh2-RwZ5UxQh0VoW-hHwgNLdgsXznKA88t2CxfOcoDzz1tDkBz0h6qhlMIWUyZUwKVMt0VC0tHcG9UJoyWSxWQ&_nc_ohc=c48wFm1ONgQQ7kNvwGvf9pO&_nc_oc=AdqL_FwJ0mAaO4NnNSRFl4-zKz4-QogDSDJW8u4e7skqXEpBoeOCaNfXXNrgSiTJci6AOZ31NBDlOA6sYwVR1vbq&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&_nc_gid=TDjRopOU2bmuqHPoabiwNg&_nc_ss=7b2a8&oh=00_Af6t8TyqS52tII6Z9dxeGsRas-AnvWH4SpcUJu8goDeehQ&oe=6A140EC6",
        shortDescription: "The highest mountain peak of Siquijor, home to folk healing rituals.",
        fullDescription: "Mount Bandilaan marks the highest peak geographic coordinates of Siquijor province. It hosts primary man-made reforestation corridors, holy trail shrines, and isolated caves where herbalists perform ceremonial medicine harvesting.",
        entranceFee: "Free access",
        openingHours: "Open daytime hours",
        activities: "High altitude canopy hiking, landscape observation tower climbing, biological butterfly sanctuary tours.",
        bestTime: "March to April during the annual Folk Healing summits.",
        travelTips: "Wear solid walking traction sneakers as jungle tracks can transform into thick mud beds rapidly when cloud systems pass over."
    },
    {
        id: 7, name: "Lugnason Falls", municipality: "San Juan",
        category: "Waterfall",
        image: "https://www.iwanderlista.com/wp-content/uploads/2020/04/Lugnason-Falls.jpg.webp",
        shortDescription: "A serene jungle waterfall displaying 12 distinct zodiac spring pathways.",
        fullDescription: "Hidden deep inside San Juan forest paths, Lugnason Falls features a steep limestone shelf generating a wide water stream drop into a large aqua-tint basin pool. Nearby streams channel down into a sequence of smaller pools representing the 12 astrological zodiac signs.",
        entranceFee: "Free (Local guide tips are highly appreciated)",
        openingHours: "6:00 AM – 5:30 PM",
        activities: "Lagoon diving, jungle tracking, river trekking, downstream spring tracking.",
        bestTime: "June to December — wet rainy season maximizes water column thickness.",
        travelTips: "Engage local youth village guides to safely direct you to hidden cold spring caverns tucked directly behind the main waterfall screen."
    },
    {
        id: 8, name: "Talingting Apo Island View", municipality: "Enrique Villanueva",
        category: "Island",
        image: "https://dailytravelpill.com/wp-content/uploads/2020/01/apo-island-main-beach-drone.jpg",
        shortDescription: "Panoramic coastal vistas facing neighboring reef formations and Apo marine channels.",
        fullDescription: "An exceptional shoreline rock outcrop lookout cliff zone managed along Enrique Villanueva coast boundaries. It delivers long range panoramic perspectives over the Bohol sea and direct views of the famous turtle sanctuary island profile.",
        entranceFee: "Free access",
        openingHours: "Always open",
        activities: "Coastal scenic viewing, photography, rock pool exploration during low tide states.",
        bestTime: "Early sunrise hours when the horizon lines show absolute clarity.",
        travelTips: "Bring high-grade binoculars to spot jumping pods of dolphins traversing marine channels early in the morning."
    }
];

/* Gallery captions */
const galleryCaptions = [
    "Prismatic Coral Sanctuaries, San Juan","Old Enchanted Balete Roots","Lazi Neoclassical Facade","Cambugahay Tier 1 Aquamarine Swing","Paliton Sandy Palm Shore Silhouette",
    "Salagdoong 35ft Jump Deck","Mt. Bandilaan Forest Lookout","Local Handwoven Basket Artistry","Torta Baking in Traditional Ovens","Lugnason Blue Pool Lagoon Splash",
    "Tubod Marine Wildlife Reserve","Siquijor Port Turquoise Shallows","Traditional Folk Healing Stew","Guiwanon Mangrove Timber Bridges","Maria Town Colonial Church Belfry",
    "Paliton Skiff Boat Coastal Drifting","Pan de Monja Fresh Batch Trays","Siquijor Mountain Dirt Biking","Solili Festival Festive Headdress","Fresh Coconut Urchin Shucking",
    "Tulapos Marine Sanctuary Barracuda","Cang-isong Century Old Timber House","Lazi Convent Ancient Floorboards","Siquijor Bay Golden Hour Low Tide","Maite Marine Reserve Sea Turtles",
    "Capilay Spring Park Shaded Pool","Local Children Pier Cliff Jumping","Coastal Highway Scooter Ride","San Antonio Herbal Markets","Bandilaan Ridge Fog Blanket"
];



const myLocalImages = [
    "https://pinaywise.com/wp-content/uploads/2024/02/Tubod-Marine-Sanctuary-Siquijor-Philippines.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzT54n9D3Y6VgeauZ3HvPHmPHhUo8KycoIK96SUabUoyz-RabILt0IecuHrHE4DMOYGSpMj5kY6uPtdHFjMOWLCCbnpZVUcDfKu28uA0n8f1_NpZumwejOiRIhPBZMOo9H45hyyrHHudrh/s1600/1.jpg",
    "https://unknowncebu.com/wp-content/uploads/2025/12/Untitled-design-2025-12-05T160706.821-1024x768.png",
    "https://scontent.fceb6-3.fna.fbcdn.net/v/t39.30808-6/481252724_718313610531376_6994038591538662123_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGeVDpAWLh1YWJU79-cyg6Cf4mDimOwghl_iYOKY7CCGfobSLDMZxey0pJ-9a6iJFTmuOoihtIDO7RWf-L_vikB&_nc_ohc=0AX7hKB3n2gQ7kNvwH7zlY9&_nc_oc=Adq2fU_L23pQipL46f65W_jo-_qr1Rzx7101yqCo6mRWAXIAN0kMvWHFsDufoANJrn8&_nc_zt=23&_nc_ht=scontent.fceb6-3.fna&_nc_gid=ALUCVQtV70QNkQjm2LKuqw&_nc_ss=7b2a8&oh=00_Af7Z-xsKZvpj4X3Al3w2YxzhS12Tvf2RUGuFAnvOBwEwmg&oe=6A1499BC",
    "https://scontent.fceb6-3.fna.fbcdn.net/v/t39.30808-6/473749671_1051833306988799_4225531701729717823_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGkcUveo8BZGFsNFSF1Rkwm3GZpyv0PXf3cZmnK_Q9d_RmVYA90G4eL1uDAdQnhXjma8ShqKlvSzm53XYMo2t_I&_nc_ohc=I4UfUrKvl5AQ7kNvwFkNysZ&_nc_oc=AdptOuFQVg_Cz4Z86SyL5OwpyY7o3ZsBOOzJ2BpGI6EF44-w4gV9H9ZoxvNXqsKUdfc&_nc_zt=23&_nc_ht=scontent.fceb6-3.fna&_nc_gid=pcXrjn0RZmmOaXTgwkPD-Q&_nc_ss=7b2a8&oh=00_Af4yglHii1w14kSLxMngIMtUYJ0VaftMKdsoKO-dJd6bag&oe=6A1499CB",
    "https://scontent.fceb6-3.fna.fbcdn.net/v/t39.30808-6/473749671_1051833306988799_4225531701729717823_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGkcUveo8BZGFsNFSF1Rkwm3GZpyv0PXf3cZmnK_Q9d_RmVYA90G4eL1uDAdQnhXjma8ShqKlvSzm53XYMo2t_I&_nc_ohc=I4UfUrKvl5AQ7kNvwFkNysZ&_nc_oc=AdptOuFQVg_Cz4Z86SyL5OwpyY7o3ZsBOOzJ2BpGI6EF44-w4gV9H9ZoxvNXqsKUdfc&_nc_zt=23&_nc_ht=scontent.fceb6-3.fna&_nc_gid=pcXrjn0RZmmOaXTgwkPD-Q&_nc_ss=7b2a8&oh=00_Af4yglHii1w14kSLxMngIMtUYJ0VaftMKdsoKO-dJd6bag&oe=6A1499CB",
    "https://scontent.fceb6-3.fna.fbcdn.net/v/t39.30808-6/473749671_1051833306988799_4225531701729717823_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGkcUveo8BZGFsNFSF1Rkwm3GZpyv0PXf3cZmnK_Q9d_RmVYA90G4eL1uDAdQnhXjma8ShqKlvSzm53XYMo2t_I&_nc_ohc=I4UfUrKvl5AQ7kNvwFkNysZ&_nc_oc=AdptOuFQVg_Cz4Z86SyL5OwpyY7o3ZsBOOzJ2BpGI6EF44-w4gV9H9ZoxvNXqsKUdfc&_nc_zt=23&_nc_ht=scontent.fceb6-3.fna&_nc_gid=pcXrjn0RZmmOaXTgwkPD-Q&_nc_ss=7b2a8&oh=00_Af4yglHii1w14kSLxMngIMtUYJ0VaftMKdsoKO-dJd6bag&oe=6A1499CB",
    "https://scontent.fceb6-3.fna.fbcdn.net/v/t39.30808-6/481156358_977713541165279_2207581862723155071_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHrzdE7y90q3ydnV9uI9v1bRVcE8r0H4ktFVwTyvQfiS9JL8tSBPBoy0NPsHGrvIv9C_ZfzwNwTS7kre_nVPAul&_nc_ohc=pKnBf3vahRwQ7kNvwGFTum4&_nc_oc=AdorznNguiMGn54tMPzD1nCOqk7VLuhWBhxgXVseG27n4znoWIJAQ5Jyqk0jyuTEbVI&_nc_zt=23&_nc_ht=scontent.fceb6-3.fna&_nc_gid=EkWmpk9OjxWP39A7PaVM_A&_nc_ss=7b2a8&oh=00_Af4H3S9Z6tW535KSdpzXHvi8vQ3WYUWSwn97d6XIJc9SbA&oe=6A14A4A4",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-9Rf-tmcM7dTPakhykjyi2g8PenWbm5yXxQ&s",
    "https://d3fphkxyf5o5bm.cloudfront.net/image-resize/format=webp,w=720/QwRY54Li1HMwD7oNfou1tIYywD6SNj3MUTSCm3mFG5",
    "https://siquijorprovince.com/wp-content/uploads/2021/04/GOPR0186_2500x.jpg",
    "https://lillagreen.com/wp-content/uploads/2024/02/Siquijor-Philippines-Travel-Guide-12.jpg",
    "https://static01.nyt.com/images/2025/09/19/multimedia/19a2_insider-occult-02-hcpk/19a2_insider-occult-02-hcpk-facebookJumbo.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGNlbckxTYGU8YgbdKyIi3Eo-59akuKHC4yIU5BQAkTUyoX0wmgzIcq9-31IaSH0xRIZQMbL0E6FYwnjalbqZAjlccGnA_kb8dGcNcQPykiwirV22k3G2svfnhmk5HixKzvxFrvokOJky9/s1600/1.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/b3/fb/f5/our-lady-of-the-divine.jpg?w=1400&h=-1&s=1",
    "https://us.images.westend61.de/0001252688pw/fishing-boats-pulled-up-onto-paliton-beach-siquijor-philippines-southeast-asia-asia-RHPLF09164.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmuKm0C9VBGrzGLJCMiU1IcVWD18Dkkhjfn-Ragg3UrwDqKleSXQI1OAmZ9VWG2MvUUIPlTd7uyX5YI1kblEdDh-jL1C-jMRTnYhL4UGQvKKnqoUdiPRSZ65m0nPCbqoD6Ozc7dlRfXrym/s1600/1.jpg",
    "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/497587491_3793417130802516_1717470538668898571_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=110&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeF729J5kUukHTc_Ry6-hHj1wpo4lqn0E8fCmjiWqfQTxyJXABFZnZvtPk4Vw_NGfp0Ow5VbbTlHZf4_xev2nNCF&_nc_ohc=fuxJY3eNI0sQ7kNvwHJL1Qb&_nc_oc=AdoN-HzsZGLS8dONlWmC6MPc2wBYOMy40QHbWtIK_KGXmXo9-wC_VZXHo5jMs0-4s0U&_nc_zt=23&_nc_ht=scontent.fceb2-2.fna&_nc_gid=lTkh74QpGOtsoVjiIIPGYA&_nc_ss=7b2a8&oh=00_Af5SdVIRjYedr99Il8VZc261ChmbMgRXD-Br6goXuT9QaA&oe=6A1491F3",
    "https://scontent.fceb6-3.fna.fbcdn.net/v/t39.30808-6/550221424_1165488848731298_4297081984438739254_n.jpg?stp=dst-jpg_p394x394_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFwV0w18NVrNWfZO0_KVzJ559NehE-Vo7jn016ET5WjuF8dd2Mz2-r0ZEbFz_17lF1br_lN6Wv4ZLpctJV1OIAE&_nc_ohc=yPqCEvQ0ynIQ7kNvwEDnadd&_nc_oc=AdqYj7r44jTyfPaHzSDe08QTR7XveVMA28yI0BbCSDfsr1kMcPJQ-L2JzjoqGJ9o0FM&_nc_zt=23&_nc_ht=scontent.fceb6-3.fna&_nc_gid=UcQvF9Qd_S_XN4eAj15qHw&_nc_ss=7b2a8&oh=00_Af49j3XZpqFlsaKTa8fAEU6YF73g6nO1UYXntuZTe0JjjA&oe=6A14924D",
    "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/474736995_1341522180598311_4473549354723419580_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGgasE-me0u51yeMQb0hnNZCLPOrGd0W8cIs86sZ3Rbx-AWjM5PUBUirH23fFqjAQq8_7B7BgawE3x_0eMwuCv9&_nc_ohc=2L1Ba6VCNFYQ7kNvwG8u-DG&_nc_oc=AdrDul5D8aAuLadxmfB8ZgtLUaLEOYM-xFZHlwcKmG2agd6l-PoVcSZ91zrX15wBbx8&_nc_zt=23&_nc_ht=scontent.fceb2-2.fna&_nc_gid=M_ZluWYAXQ4-RBgxPaOwwQ&_nc_ss=7b2a8&oh=00_Af70p_XCEDrhk-cjspiPfqS-xM5eB1ofLLt0JGa6Y3hkfw&oe=6A14A101",
    "https://siquijordirectory.com/wp-content/uploads/2022/04/Tulapos21.jpg",
    "https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/544900083_1212334440922569_3240903488888522697_n.jpg?stp=cp6_dst-jpg_p180x540_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG4FRh4HsJ0NfLjLUxN20uqI_YIBRdXRioj9ggFF1dGKoIyXwQzGLcRvjHzT9nkhLgWtNOGunA1dS9nG-emHWtZ&_nc_ohc=wTE-AVgHgu4Q7kNvwGLZod-&_nc_oc=Adr4m8Lgf4smSoWQ8ECeC-O5JmG8I7Pmmnzsr3kUB9FJwtEfds14tlPX-8uX-E2wuwk&_nc_zt=23&_nc_ht=scontent.fceb2-1.fna&_nc_gid=W4EbWM0Zg6hcKnOeWqvz0Q&_nc_ss=7b2a8&oh=00_Af5iuC2yAFLihyOiWBVAfkEQZVuZlV96-PIIx3v4oIyncQ&oe=6A14AA78",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8iIMIp0sAV5iuAp1dQVaAJuI_sYsu7OyYbpFk3dSIn7Tldqh9m7dcPnr6nogsoNAGBPOpWPvpDChKa8f5TccxqU1EEKQuW0uhAehrxGrGxhkDrTXb17C6GSKVqDp3PjsCU1i5GxAo-x4/?imgmax=800",
    "https://philippineshiddengems.com/wp-content/uploads/2024/02/Siquijor-Beaches.jpg",
    "https://d2p1cf6997m1ir.cloudfront.net/media/thumbnails/d4/3a/d43afb8459cdd3b7af26369dbaecaf6b.webp?s=789ccb4d4dc94cd42fc8c82fc92fd63737d2b748d437b1d437493430d64fcf2f283234b530d03534b334373532343336363037d3f30a700700b1780e89&g=313632307831303830&p=789c3d8d3d0b02311044ffcbd8a6b3919407622b3696b2e6430ed66cdc24a088ffdde5389dee318f9937b2e89d3a3ccefbe90887c7209efb0b7eb77508c2a2ad5248269c0e93f5a3b6406cdc752433542a7c266e2b5ce5095f06b383ca2831c51f568a712eb7bfbdf26539b1fd4d5e82cf176b813252&sign=f69770f4449485671da5824d2efb5c97747eba103c04db7dac761183ec6e64035f773668f9962f04164529df14dc5f146911c78c1da719d0fe6c07a3d7b433e5",
    "https://siquijordirectory.com/wp-content/uploads/2016/04/capilay-Spring-Park.jpg",
    "https://preview.redd.it/cliff-divers-in-salagdoong-beach-siquijor-v0-7ukh09xsagjc1.jpg?width=1080&crop=smart&auto=webp&s=60f18183529ca91275c4261024c283ac527a24f2",
    "https://res.klook.com/image/upload/c_crop,h_960,w_1536,x_0,y_32,z_0.5/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/i8eiveyfwtsgfqcv6luv.jpg",
    "https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/660821203_1410070037799432_765166915011703635_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFoiafcCRNln9daqDdHg5apHvYm29hQ8D0e9ibb2FDwPdMTK2taRO9C0TdmQqrXdHIPHXDns7oF8doPmyD4bGxE&_nc_ohc=ijnxcWuB0OwQ7kNvwHqycEx&_nc_oc=Adp_4VIf03bD_KnTzndeh3w9ab_6ZsIWtlGzjQLDikhI67zH1rqukRMLp1620A6URII&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&_nc_gid=CT3CPy7B2dDwAEEG0lXy6w&_nc_ss=7b2a8&oh=00_Af7QRaUumNfHDKlXG6dpIycRaqfk2LdY6MERhpodanBC6A&oe=6A14915A",
    "https://i1.wp.com/theblogofdimi.com/wp-content/uploads/2020/03/mount-bandilaan-siquijor-philippines-2020-9.jpg?fit=600%2C450&ssl=1"
];

/* ------------------------------------------------------------------
   STATE
   ------------------------------------------------------------------ */
let selectedCategory = "All";
let activeLightboxIndex = 0;
let galleryImageUrls = [];

/* ------------------------------------------------------------------
   INIT
   ------------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
    renderDestinations(destinationsData);
    populateDropdownOptions(destinationsData);
    generateGallery();
    setupSearchAndPillFilters();
    setupFormValidation();
    setupNavScroll();
    setupScrollProgress();
    setupBackToTop();
    setupScrollReveal();
    setupCounterAnimation();
});

/* ------------------------------------------------------------------
   NAV — Scroll shrink + active link highlight
   ------------------------------------------------------------------ */
function setupNavScroll() {
    const nav = document.getElementById("mainNav");
    const sections = document.querySelectorAll("section[id], header[id]");
    const navLinks = document.querySelectorAll(".modern-nav .nav-link[href^='#']");

    window.addEventListener("scroll", () => {
        // Shrink nav
        if (window.scrollY > 50) { nav.classList.add("scrolled"); }
        else { nav.classList.remove("scrolled"); }

        // Active link
        let current = "";
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 100) current = sec.getAttribute("id");
        });
        navLinks.forEach(a => {
            a.classList.remove("active-nav-link");
            if (a.getAttribute("href") === `#${current}`) a.classList.add("active-nav-link");
        });
    }, { passive: true });
}

/* ------------------------------------------------------------------
   SCROLL PROGRESS BAR
   ------------------------------------------------------------------ */
function setupScrollProgress() {
    const bar = document.getElementById("scrollProgress");
    window.addEventListener("scroll", () => {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = `${(window.scrollY / total) * 100}%`;
    }, { passive: true });
}

/* ------------------------------------------------------------------
   BACK TO TOP
   ------------------------------------------------------------------ */
function setupBackToTop() {
    const btn = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) btn.classList.add("visible");
        else btn.classList.remove("visible");
    }, { passive: true });
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ------------------------------------------------------------------
   SCROLL REVEAL
   ------------------------------------------------------------------ */
function setupScrollReveal() {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add("revealed");
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
}

/* ------------------------------------------------------------------
   COUNTER ANIMATION
   ------------------------------------------------------------------ */
function setupCounterAnimation() {
    const counters = document.querySelectorAll("[data-count-to]");
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                animateCount(e.target);
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(el => io.observe(el));
}

function animateCount(el) {
    const target  = parseInt(el.getAttribute("data-count-to"), 10);
    const suffix  = el.getAttribute("data-count-suffix") || "";
    const dur     = 1800;
    const start   = performance.now();

    function frame(now) {
        const progress = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        el.textContent = Math.floor(ease * target) + suffix;
        if (progress < 1) requestAnimationFrame(frame);
        else el.textContent = target + suffix;
    }
    requestAnimationFrame(frame);
}

/* ------------------------------------------------------------------
   RENDER DESTINATIONS
   ------------------------------------------------------------------ */
function renderDestinations(data) {
    const grid = document.getElementById("destinationsGrid");
    grid.innerHTML = "";

    if (data.length === 0) {
        grid.innerHTML = `
            <div class="col-12 no-results">
                <i class="bi bi-patch-exclamation"></i>
                <p>No destinations match your current filter.</p>
                <p style="font-size:0.9rem;color:#94a3b8;">Try adjusting your search or resetting the category.</p>
            </div>`;
        return;
    }

    data.forEach((item, idx) => {
        const col = document.createElement("div");
        col.className = "col-sm-6 col-lg-4";
        col.setAttribute("data-reveal", "up");
        col.setAttribute("data-delay", Math.min(idx * 100, 400).toString());

        const isFree = item.entranceFee.toLowerCase().includes("free");
        const feeDisplay = isFree ? "Free Entry" : item.entranceFee.split(" ").slice(0, 2).join(" ");
        const feeIcon = isFree ? "bi-gift-fill" : "bi-tag-fill";

        col.innerHTML = `
            <div class="dest-card">
                <div class="dest-card-img">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                    <span class="dest-card-badge">${item.category}</span>
                </div>
                <div class="dest-card-body">
                    <div class="dest-card-location">
                        <i class="bi bi-geo-alt-fill"></i>
                        ${item.municipality}, Siquijor
                    </div>
                    <div class="dest-card-title">${item.name}</div>
                    <p class="dest-card-desc">${item.shortDescription}</p>
                    <div class="dest-card-footer">
                        <span class="dest-fee"><i class="bi ${feeIcon}"></i>${feeDisplay}</span>
                        <button class="btn-view-details" onclick="openDetailsModal(${item.id})">
                            View Details <i class="bi bi-arrow-right ms-1"></i>
                        </button>
                    </div>
                </div>
            </div>`;
        grid.appendChild(col);
    });

    // Re-observe new elements
    setupScrollReveal();
}

/* ------------------------------------------------------------------
   DROPDOWN OPTIONS
   ------------------------------------------------------------------ */
function populateDropdownOptions(data) {
    const select = document.getElementById("selectedDestination");
    data.forEach(item => {
        const opt = document.createElement("option");
        opt.value = item.name;
        opt.textContent = `${item.name} (${item.municipality})`;
        select.appendChild(opt);
    });
}

/* ------------------------------------------------------------------
   GALLERY
   ------------------------------------------------------------------ */
function generateGallery() {
    const container = document.getElementById("galleryContainer");
    galleryImageUrls = [];

    // Loop through your list of images instead of a hardcoded number 30
    for (let i = 0; i < myLocalImages.length; i++) {
        
        // Grab the image URL from your list
        const imgUrl = myLocalImages[i];
        galleryImageUrls.push(imgUrl);

        const caption = galleryCaptions[i] || "Mystical Siquijor Landscape";
        const tile = document.createElement("div");
        tile.className = "gallery-tile";
        tile.innerHTML = `
            <img src="${imgUrl}" alt="${caption}" loading="lazy">
            <div class="gallery-tile-overlay">
                <i class="bi bi-zoom-in"></i>
            </div>`;
        tile.addEventListener("click", () => openLightbox(i, imgUrl, caption));
        container.appendChild(tile);
    }
}

/* ------------------------------------------------------------------
   SEARCH + PILL FILTER
   ------------------------------------------------------------------ */
function setupSearchAndPillFilters() {
    const searchInput = document.getElementById("searchInput");
    const pills = document.querySelectorAll(".btn-pill[data-category]");

    const runFilter = () => {
        const query = searchInput.value.toLowerCase().trim();
        const filtered = destinationsData.filter(item => {
            const matchQ = !query ||
                item.name.toLowerCase().includes(query) ||
                item.municipality.toLowerCase().includes(query) ||
                item.category.toLowerCase().includes(query) ||
                item.shortDescription.toLowerCase().includes(query);
            const matchP = selectedCategory === "All" || item.category === selectedCategory;
            return matchQ && matchP;
        });
        renderDestinations(filtered);
    };

    pills.forEach(pill => {
        pill.addEventListener("click", () => {
            pills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            selectedCategory = pill.getAttribute("data-category");
            runFilter();
        });
    });

    searchInput.addEventListener("input", runFilter);

    // Clear search button
    const clearBtn = document.getElementById("searchClear");
    if (clearBtn) {
        searchInput.addEventListener("input", () => {
            clearBtn.style.opacity = searchInput.value ? "1" : "0";
        });
        clearBtn.addEventListener("click", () => {
            searchInput.value = "";
            clearBtn.style.opacity = "0";
            runFilter();
        });
    }
}

/* ------------------------------------------------------------------
   DETAILS MODAL
   ------------------------------------------------------------------ */
function openDetailsModal(id) {
    const d = destinationsData.find(i => i.id === id);
    if (!d) return;

    document.getElementById("modalImage").src = d.image;
    document.getElementById("modalTitle").textContent = d.name;
    document.getElementById("modalSubtitle").textContent = `${d.municipality}, Siquijor, Philippines`;
    document.getElementById("modalCategory").textContent = d.category;
    document.getElementById("modalFullDescription").textContent = d.fullDescription;
    document.getElementById("modalActivities").textContent = d.activities;
    document.getElementById("modalHours").textContent = d.openingHours;
    document.getElementById("modalFee").textContent = d.entranceFee;
    document.getElementById("modalBestTime").textContent = d.bestTime;
    document.getElementById("modalTravelTips").textContent = d.travelTips;

    new bootstrap.Modal(document.getElementById("detailsModal")).show();
}

/* ------------------------------------------------------------------
   LIGHTBOX
   ------------------------------------------------------------------ */
function openLightbox(index, url, caption) {
    activeLightboxIndex = index;
    updateLightbox(url, caption);
    new bootstrap.Modal(document.getElementById("lightboxModal")).show();
}

function updateLightbox(url, caption) {
    const img = document.getElementById("lightboxImage");
    img.style.opacity = "0";
    setTimeout(() => {
        img.src = url;
        img.onload = () => { img.style.opacity = "1"; img.style.transition = "opacity 0.3s ease"; };
    }, 150);
    document.getElementById("lightboxCaption").textContent =
        `${activeLightboxIndex + 1} / 30 — ${caption}`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("lightboxPrev")?.addEventListener("click", () => {
        activeLightboxIndex = (activeLightboxIndex === 0) ? 29 : activeLightboxIndex - 1;
        updateLightbox(galleryImageUrls[activeLightboxIndex], galleryCaptions[activeLightboxIndex]);
    });
    document.getElementById("lightboxNext")?.addEventListener("click", () => {
        activeLightboxIndex = (activeLightboxIndex === 29) ? 0 : activeLightboxIndex + 1;
        updateLightbox(galleryImageUrls[activeLightboxIndex], galleryCaptions[activeLightboxIndex]);
    });

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
        const lbm = document.getElementById("lightboxModal");
        if (!lbm.classList.contains("show")) return;
        if (e.key === "ArrowLeft") document.getElementById("lightboxPrev")?.click();
        if (e.key === "ArrowRight") document.getElementById("lightboxNext")?.click();
    });
});

/* ------------------------------------------------------------------
   FORM VALIDATION
   ------------------------------------------------------------------ */
function setupFormValidation() {
    const form = document.getElementById("inquiryForm");
    const submitBtn = form.querySelector("[type='submit']");

    const rules = {
        fullName:    { assertion: v => v.length >= 2,             errId: "nameError" },
        email:       { assertion: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), errId: "emailError" },
        contactNumber: { assertion: v => /^[0-9+\- ]{7,}$/.test(v), errId: "contactError" },
        selectedDestination: { assertion: v => v !== "",           errId: "destinationError" },
        travelDate:  { assertion: v => v !== "",                   errId: "dateError" },
        numVisitors: { assertion: v => parseInt(v) >= 1,           errId: "visitorsError" },
        message:     { assertion: v => v.trim().length >= 10,      errId: "messageError" }
    };

    // Live validation on blur
    Object.keys(rules).forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        el.addEventListener("blur", () => validateField(id, el, rules[id]));
        el.addEventListener("input", () => {
            if (el.classList.contains("is-invalid")) validateField(id, el, rules[id]);
        });
    });

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        let valid = true;

        Object.keys(rules).forEach(id => {
            const el = document.getElementById(id);
            if (!validateField(id, el, rules[id])) valid = false;
        });

        if (!valid) {
            const firstInvalid = form.querySelector(".is-invalid");
            firstInvalid?.scrollIntoView({ behavior: "smooth", block: "center" });
            return;
        }

        // Simulate async submit
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span> Sending…`;

        await new Promise(r => setTimeout(r, 1800));

        const dest = document.getElementById("selectedDestination").value;
        showToast("success", "Inquiry Sent!", `Your request for "${dest}" has been submitted to the Siquijor Tourism Board.`);
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<i class="bi bi-send-check-fill"></i> Dispatch Travel Inquiry`;
    });
}

function validateField(id, el, rule) {
    const value = el.value.trim();
    const errEl = document.getElementById(rule.errId);
    const isValid = rule.assertion(value);

    el.classList.toggle("is-invalid", !isValid);
    if (errEl) errEl.classList.toggle("show", !isValid);
    return isValid;
}

/* ------------------------------------------------------------------
   TOAST NOTIFICATIONS
   ------------------------------------------------------------------ */
function showToast(type, title, msg, duration = 5000) {
    const container = document.getElementById("toastContainer");
    const icon = type === "success" ? "bi-check-circle-fill" : "bi-x-circle-fill";

    const toast = document.createElement("div");
    toast.className = `toast-item toast-${type}`;
    toast.innerHTML = `
        <i class="bi ${icon} toast-icon"></i>
        <div class="toast-text-wrap">
            <div class="toast-title">${title}</div>
            <div class="toast-msg">${msg}</div>
        </div>
        <button class="toast-close" onclick="removeToast(this.parentElement)">
            <i class="bi bi-x-lg"></i>
        </button>`;

    container.appendChild(toast);

    const timer = setTimeout(() => removeToast(toast), duration);
    toast._timer = timer;
}

function removeToast(el) {
    clearTimeout(el._timer);
    el.classList.add("removing");
    el.addEventListener("animationend", () => el.remove());
}