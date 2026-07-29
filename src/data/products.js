export const products = [
  // Bridal Wear (4)
  {
    id: "prod-1",
    title: "Royal Crimson Zardozi Lehenga",
    price: 185000,
    rating: 4.9,
    category: "bridal-wear",
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80",
    description: "Hand-stitched crimson velvet lehenga embellished with real silver Zardozi threadwork, zardosi embroidery, and twin net dupattas.",
    isNew: true,
    isTrending: true,
    specs: { Fabric: "Raw Silk & Velvet", Work: "Hand Zardozi", Colors: "Crimson Red / Antique Gold", Origin: "Jaipur Atelier" }
  },
  {
    id: "prod-2",
    title: "Kanjeevaram Pure Gold Tissue Saree",
    price: 145000,
    rating: 4.8,
    category: "bridal-wear",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    description: "Authentic Kanchipuram woven silk saree with pure zari korvai borders and intricate temple peacock motifs.",
    isNew: false,
    isTrending: true,
    specs: { Fabric: "100% Pure Mulberry Silk", Zari: "Pure Gold Zari", Length: "6.3 Meters", Included: "Unstitched Blouse Piece" }
  },
  {
    id: "prod-3",
    title: "Ivory Pearl Organza Gown",
    price: 165000,
    rating: 4.9,
    category: "bridal-wear",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    description: "Ethos ethereal ivory ballgown handcrafted with pearl cluster embroidery, corset bodice, and a flowing cathedral train.",
    isNew: true,
    isTrending: false,
    specs: { Fabric: "French Organza & Tulle", Detail: "Hand-sewn Freshwater Pearls", Neckline: "Sweetheart", Back: "Corset Lace-up" }
  },
  {
    id: "prod-4",
    title: "Blush Pink Mirrorwork Lehenga",
    price: 152000,
    rating: 4.7,
    category: "bridal-wear",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    description: "Contemporary pastel blush lehenga featuring intricate Abhla mirrorwork and organza dupatta with scalloped borders.",
    isNew: false,
    isTrending: true,
    specs: { Fabric: "Georgette & Organza", Work: "Hand Mirror Work", Color: "Blush Pink", Occasion: "Sangeet / Reception" }
  },

  // Groom Wear (4)
  {
    id: "prod-5",
    title: "Imperial Silk Jacquard Sherwani",
    price: 135000,
    rating: 4.9,
    category: "groom-wear",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    description: "Royal ivory raw silk sherwani intricately hand-embroidered with tonal threadwork, jeweled buttons, and silk churidar.",
    isNew: true,
    isTrending: true,
    specs: { Fabric: "Raw Silk", Lining: "Pure Viscose Satin", Buttons: "Handcrafted Antique Brass", Included: "Sherwani, Churidar & Stole" }
  },
  {
    id: "prod-6",
    title: "Midnight Velvet Tuxedo Suit",
    price: 110000,
    rating: 4.8,
    category: "groom-wear",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
    description: "Bespoke midnight blue Italian velvet tuxedo featuring silk satin lapels, tailored trousers, and cummerbund.",
    isNew: false,
    isTrending: true,
    specs: { Cut: "Slim Fit", Lapel: "Peak Satin Lapel", Fabric: "Italian Cotton Velvet", Includes: "Jacket & Trousers" }
  },
  {
    id: "prod-7",
    title: "Pastel Mint Bandhgala Set",
    price: 89000,
    rating: 4.6,
    category: "groom-wear",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    description: "Sophisticated mint green Jodhpuri Bandhgala crafted in rich silk linen with antique silver buttons.",
    isNew: true,
    isTrending: false,
    specs: { Style: "Classic Jodhpuri", Pocket: "Welted Chest & Waist", Buttons: "Embossed Silver", Fit: "Tailored" }
  },
  {
    id: "prod-8",
    title: "Gold Threadwork Silk Nehru Jacket",
    price: 62000,
    rating: 4.7,
    category: "groom-wear",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&q=80",
    description: "Elegantly textured gold zari Nehru jacket paired with crisp ivory kurta and dhoti trousers.",
    isNew: false,
    isTrending: false,
    specs: { Outer: "Art Silk Zari", Pattern: "Brocade Weave", Care: "Dry Clean Only" }
  },

  // Jewellery (4)
  {
    id: "prod-9",
    title: "Heritage Kundan & Emerald Choker",
    price: 245000,
    rating: 5.0,
    category: "jewellery",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    description: "22K gold-plated regal Kundan necklace set with natural uncut polki stones and drops of Zambia emerald beads.",
    isNew: true,
    isTrending: true,
    specs: { Base: "22K Gold Plated Brass", Stones: "Kundan Polki & Emerald Beads", Set: "Necklace + Earrings + Maang Tikka" }
  },
  {
    id: "prod-10",
    title: "Celestial Diamond Haar Necklace",
    price: 385000,
    rating: 4.9,
    category: "jewellery",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    description: "Multi-strand VVS clarity solitaire diamond necklace crafted in 18K white gold setting with detachable centerpiece.",
    isNew: false,
    isTrending: true,
    specs: { Metal: "18K White Gold", "Diamond Weight": "8.5 Carats Total", Clarity: "VVS-VS", Cut: "Round Brilliant & Marquise" }
  },
  {
    id: "prod-11",
    title: "Traditional Temple Gold Mangalsutra",
    price: 128000,
    rating: 4.8,
    category: "jewellery",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80",
    description: "Handcrafted 22K hallmark gold pendant on black spinach bead chain featuring Lakshmi motif.",
    isNew: true,
    isTrending: false,
    specs: { Metal: "22K Yellow Gold (Hallmarked)", Length: "18 Inches", Weight: "24.5 grams" }
  },
  {
    id: "prod-12",
    title: "Pearl & Uncut Polki Jhumka Earrings",
    price: 68000,
    rating: 4.7,
    category: "jewellery",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80",
    description: "Intricate architectural gold Jhumkas adorned with Basra pearls and Meenakari enamelwork on the underside.",
    isNew: false,
    isTrending: false,
    specs: { Metal: "22K Gold Plated", Craft: "Meenakari & Polki", Backing: "Push Back with Support Hook" }
  },

  // Wedding Rings (3)
  {
    id: "prod-13",
    title: "Eternity Cushion Cut Solitaire Ring",
    price: 224000,
    rating: 4.9,
    category: "wedding-rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    description: "A breathtaking 2.0 carat cushion cut lab-grown diamond set on a delicate platinum micro-pave band.",
    isNew: true,
    isTrending: true,
    specs: { Metal: "950 Platinum", "Center Stone": "2.0 Carat Cushion Cut", Certification: "IGI Certified", Clarity: "VVS1" }
  },
  {
    id: "prod-14",
    title: "Classic Platinum His & Hers Couple Bands",
    price: 152000,
    rating: 4.8,
    category: "wedding-rings",
    image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80",
    description: "Matching brushed platinum wedding bands with comfort-fit inner curve and discreet recessed channel diamond.",
    isNew: false,
    isTrending: true,
    specs: { Material: "950 Platinum", Finish: "Satin Brushed & Polished Edge", Inscription: "Custom Engraving Included" }
  },
  {
    id: "prod-15",
    title: "Vintage Rose Gold Diamond Crown Band",
    price: 98000,
    rating: 4.7,
    category: "wedding-rings",
    image: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&w=800&q=80",
    description: "Tiara-shaped 18K rose gold ring adorned with round brilliant and marquise diamonds designed for stacking.",
    isNew: true,
    isTrending: false,
    specs: { Metal: "18K Rose Gold", "Total Carat": "0.75ctw", Style: "Chevron Stacker" }
  },

  // Decoration (3)
  {
    id: "prod-16",
    title: "Enchanted Garden Mandap & Arch",
    price: 275000,
    rating: 5.0,
    category: "decoration",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    description: "Full floral mandap setup with imported white hydrangeas, blush roses, hanging crystal drops, and golden pillars.",
    isNew: true,
    isTrending: true,
    specs: { Flowers: "White Hydrangeas, Garden Roses & Eucalyptus", Framework: "Gold Anodized Arch Structure", Lighting: "Warm Amber Fairy LED" }
  },
  {
    id: "prod-17",
    title: "Glass Candelabra Table Centerpieces",
    price: 58000,
    rating: 4.8,
    category: "decoration",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
    description: "Set of 6 crystal glass 5-arm candelabras with LED taper candles and lush ring of ivory peonies.",
    isNew: false,
    isTrending: false,
    specs: { Quantity: "Set of 6 Sets", Height: "32 Inches", Candles: "Flameless Warm LED Tapers" }
  },
  {
    id: "prod-18",
    title: "Boho Fairy Light Backdrop Curtain",
    price: 45000,
    rating: 4.6,
    category: "decoration",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80",
    description: "20x10ft flowing chiffon fabric backdrop infused with 800 warm white fairy light strands and floral header.",
    isNew: false,
    isTrending: true,
    specs: { Size: "20ft Wide x 10ft High", Fabric: "Translucent White Chiffon", Modes: "8 Lighting Sequences" }
  },

  // Invitation Cards (3)
  {
    id: "prod-19",
    title: "Monogram Gold-Foil Velvet Box Invites",
    price: 38000,
    rating: 4.9,
    category: "invitation-cards",
    image: "https://images.unsplash.com/photo-1510076857177-7470076d4298?auto=format&fit=crop&w=800&q=80",
    description: "Luxury velvet hardbound invitation box with hot-stamped gold foil monogram, brass lock, and inserts for all events.",
    isNew: true,
    isTrending: true,
    specs: { "Minimum Order": "50 Boxes", Cardstock: "350 GSM Cotton Paper", Detail: "Custom Wax Seal & Gold Tassel" }
  },
  {
    id: "prod-20",
    title: "Minimalist Acrylic Glass Invitation Suite",
    price: 29000,
    rating: 4.7,
    category: "invitation-cards",
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
    description: "Ultra-modern 3mm transparent acrylic invitation card etched with white UV lettering and vellum sleeve.",
    isNew: false,
    isTrending: true,
    specs: { Material: "3mm Clear Cast Acrylic", Envelope: "Vellum & Soft Grey Cardboard", Printing: "UV Raised White Printing" }
  },
  {
    id: "prod-21",
    title: "Handcrafted Floral Watercolor Scroll Suite",
    price: 24000,
    rating: 4.8,
    category: "invitation-cards",
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80",
    description: "Vintage-inspired botanical watercolor scroll invitations rolled inside gold metallic tubes.",
    isNew: false,
    isTrending: false,
    specs: { Paper: "Handmade Parchment with Deckled Edges", Tube: "Gold Metal Cylinder", Minimum: "50 Units" }
  },

  // Footwear (3)
  {
    id: "prod-22",
    title: "Embroidered Zardozi Bridal Mojari",
    price: 18500,
    rating: 4.8,
    category: "footwear",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
    description: "Handcrafted genuine leather mojaris adorned with dabka, pearls, and cushioned double-padded soles for all-day comfort.",
    isNew: true,
    isTrending: true,
    specs: { Upper: "Raw Silk with Dabka Work", Sole: "100% Genuine Leather", Cushioning: "Double Memory Foam" }
  },
  {
    id: "prod-23",
    title: "Glitter Crystal Platform Stilettos",
    price: 32000,
    rating: 4.9,
    category: "footwear",
    image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=800&q=80",
    description: "Sparkling silver crystal champagne pumps featuring a 4-inch heel and secure ankle strap.",
    isNew: false,
    isTrending: false,
    specs: { "Heel Height": "4 Inches (10cm)", Upper: "Swarovski Crystal Dust", Sole: "Anti-slip Rubber" }
  },
  {
    id: "prod-24",
    title: "Handmade Silk Groom Jutti",
    price: 14500,
    rating: 4.6,
    category: "footwear",
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=800&q=80",
    description: "Ivory silk juttis with subtle zari piping and royal crest medallion designed for grooms.",
    isNew: true,
    isTrending: false,
    specs: { Material: "Silk & Leather", Style: "Pointed Royal Jutti", Fit: "True to size" }
  },

  // Accessories (3)
  {
    id: "prod-25",
    title: "Sapphire Crystal Automatic Skeleton Watch",
    price: 148000,
    rating: 4.9,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    description: "Exclusive luxury groom watch with open skeleton dial, sapphire crystal glass, and alligator leather strap.",
    isNew: true,
    isTrending: true,
    specs: { Movement: "Swiss Automatic Mechanical", Case: "316L Stainless Steel 42mm", "Water Resistance": "50m" }
  },
  {
    id: "prod-26",
    title: "Pearl & Velvet Designer Bridal Potli Bag",
    price: 22000,
    rating: 4.8,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    description: "Soft velvet potli pouch handcrafted with pearl tassels, drawstring closure, and intricate beadwork.",
    isNew: false,
    isTrending: true,
    specs: { Fabric: "Micro-Velvet", Tassels: "Freshwater Pearls & Shells", Chain: "Detachable Gold Chain" }
  },
  {
    id: "prod-27",
    title: "Handcrafted Silver Crest Cufflinks",
    price: 12500,
    rating: 4.7,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=800&q=80",
    description: "Sterling 925 silver cufflinks with mother of pearl inlay and custom family crest engraving option.",
    isNew: false,
    isTrending: false,
    specs: { Metal: "925 Sterling Silver", Inlay: "Natural White Mother of Pearl", Fastening: "Bullet Back" }
  },

  // Return Gifts (3)
  {
    id: "prod-28",
    title: "Silver Plated Dry Fruit Gift Box Hamper",
    price: 18500,
    rating: 4.8,
    category: "return-gifts",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
    description: "Luxury 4-compartment silver plated brass container packaged inside a velvet gift box for wedding guests.",
    isNew: true,
    isTrending: true,
    specs: { Material: "Silver Plated Brass", Included: "4 Glass Jars inside Velvet Box", Size: "10x10 Inches" }
  },
  {
    id: "prod-29",
    title: "Artisanal Aromatherapy Scented Candle Set",
    price: 14000,
    rating: 4.7,
    category: "return-gifts",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
    description: "Trio of hand-poured soy wax candles infused with French lavender, rose, and amber wood oils in alabaster jars.",
    isNew: false,
    isTrending: false,
    specs: { Wax: "100% Organic Soy Wax", "Burn Time": "45 Hours per Jar", Packaging: "Satin Ribbon Gift Box" }
  },
  {
    id: "prod-30",
    title: "Silver Ganesha Medallion Keepsake",
    price: 16000,
    rating: 4.9,
    category: "return-gifts",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=800&q=80",
    description: "Pure 999 silver embossed Lord Ganesha coin framed inside a clear acrylic display casing.",
    isNew: false,
    isTrending: true,
    specs: { Purity: "999 Fine Silver", Weight: "20 Grams", Frame: "Crystal Clear Stand Casing" }
  }
];
