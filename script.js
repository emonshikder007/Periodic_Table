const ELEMENTS = [
  {
    "number": 1,
    "symbol": "H",
    "name": "Hydrogen",
    "mass": 1.008,
    "category": "nonmetal",
    "group": 1,
    "period": 1,
    "x": 1,
    "y": 1,
    "econfig": "1s1",
    "props": ["Gas at STP"]
  },
  {
    "number": 2,
    "symbol": "He",
    "name": "Helium",
    "mass": 4.0026,
    "category": "noble",
    "group": 18,
    "period": 1,
    "x": 18,
    "y": 1,
    "econfig": "1s2",
    "props": ["Inert gas"]
  },
  {
    "number": 3,
    "symbol": "Li",
    "name": "Lithium",
    "mass": 6.94,
    "category": "metal",
    "group": 1,
    "period": 2,
    "x": 1,
    "y": 2,
    "econfig": "[He] 2s1",
    "props": ["Alkali metal"]
  },
  {
    "number": 4,
    "symbol": "Be",
    "name": "Beryllium",
    "mass": 9.0122,
    "category": "metal",
    "group": 2,
    "period": 2,
    "x": 2,
    "y": 2,
    "econfig": "[He] 2s2",
    "props": ["Alkaline earth metal"]
  },
  {
    "number": 5,
    "symbol": "B",
    "name": "Boron",
    "mass": 10.81,
    "category": "metalloid",
    "group": 13,
    "period": 2,
    "x": 13,
    "y": 2,
    "econfig": "[He] 2s2 2p1",
    "props": ["Metalloid"]
  },
  {
    "number": 6,
    "symbol": "C",
    "name": "Carbon",
    "mass": 12.011,
    "category": "nonmetal",
    "group": 14,
    "period": 2,
    "x": 14,
    "y": 2,
    "econfig": "[He] 2s2 2p2",
    "props": ["Solid at STP"]
  },
  {
    "number": 7,
    "symbol": "N",
    "name": "Nitrogen",
    "mass": 14.007,
    "category": "nonmetal",
    "group": 15,
    "period": 2,
    "x": 15,
    "y": 2,
    "econfig": "[He] 2s2 2p3",
    "props": ["Gas at STP"]
  },
  {
    "number": 8,
    "symbol": "O",
    "name": "Oxygen",
    "mass": 15.999,
    "category": "nonmetal",
    "group": 16,
    "period": 2,
    "x": 16,
    "y": 2,
    "econfig": "[He] 2s2 2p4",
    "props": ["Gas at STP"]
  },
  {
    "number": 9,
    "symbol": "F",
    "name": "Fluorine",
    "mass": 18.998,
    "category": "nonmetal",
    "group": 17,
    "period": 2,
    "x": 17,
    "y": 2,
    "econfig": "[He] 2s2 2p5",
    "props": ["Halogen"]
  },
  {
    "number": 10,
    "symbol": "Ne",
    "name": "Neon",
    "mass": 20.1797,
    "category": "noble",
    "group": 18,
    "period": 2,
    "x": 18,
    "y": 2,
    "econfig": "[He] 2s2 2p6",
    "props": ["Inert gas"]
  },
  {
    "number": 11,
    "symbol": "Na",
    "name": "Sodium",
    "mass": 22.9898,
    "category": "metal",
    "group": 1,
    "period": 3,
    "x": 1,
    " revolve": "[Ne] 3s1",
    "props": ["Alkali metal"]
  },
  {
    "number": 12,
    "symbol": "Mg",
    "name": "Magnesium",
    "mass": 24.305,
    "category": "metal",
    "group": 2,
    "period": 3,
    "x": 2,
    "y": 3,
    "econfig": "[Ne] 3s2",
    "props": ["Alkaline earth metal"]
  },
  {
    "number": 13,
    "symbol": "Al",
    "name": "Aluminum",
    "mass": 26.9815,
    "category": "metal",
    "group": 13,
    "period": 3,
    "x": 13,
    "y": 3,
    "econfig": "[Ne] 3s2 3p1",
    "props": ["Post-transition metal"]
  },
  {
    "number": 14,
    "symbol": "Si",
    "name": "Silicon",
    "mass": 28.085,
    "category": "metalloid",
    "group": 14,
    "period": 3,
    "x": 14,
    "y": 3,
    "econfig": "[Ne] 3s2 3p2",
    "props": ["Metalloid"]
  },
  {
    "number": 15,
    "symbol": "P",
    "name": "Phosphorus",
    "mass": 30.9738,
    "category": "nonmetal",
    "group": 15,
    "period": 3,
    "x": 15,
    "y": 3,
    "econfig": "[Ne] 3s2 3p3",
    "props": ["Solid at STP"]
  },
  {
    "number": 16,
    "symbol": "S",
    "name": "Sulfur",
    "mass": 32.06,
    "category": "nonmetal",
    "group": 16,
    "period": 3,
    "x": 16,
    "y": 3,
    "econfig": "[Ne] 3s2 3p4",
    "props": ["Solid at STP"]
  },
  {
    "number": 17,
    "symbol": "Cl",
    "name": "Chlorine",
    "mass": 35.45,
    "category": "nonmetal",
    "group": 17,
    "period": 3,
    "x": 17,
    "y": 3,
    "econfig": "[Ne] 3s2 3p5",
    "props": ["Halogen"]
  },
  {
    "number": 18,
    "symbol": "Ar",
    "name": "Argon",
    "mass": 39.948,
    "category": "noble",
    "group": 18,
    "period": 3,
    "x": 18,
    "y": 3,
    "econfig": "[Ne] 3s2 3p6",
    "props": ["Inert gas"]
  },
  {
    "number": 19,
    "symbol": "K",
    "name": "Potassium",
    "mass": 39.0983,
    "category": "metal",
    "group": 1,
    "period": 4,
    "x": 1,
    "y": 4,
    "econfig": "[Ar] 4s1",
    "props": ["Alkali metal"]
  },
  {
    "number": 20,
    "symbol": "Ca",
    "name": "Calcium",
    "mass": 40.078,
    "category": "metal",
    "group": 2,
    "period": 4,
    "x": 2,
    "y": 4,
    "econfig": "[Ar] 4s2",
    "props": ["Alkaline earth metal"]
  },
  {
    "number": 21,
    "symbol": "Sc",
    "name": "Scandium",
    "mass": 44.9559,
    "category": "metal",
    "group": 3,
    "period": 4,
    "x": 3,
    "y": 4,
    "econfig": "[Ar] 3d1 4s2",
    "props": ["Transition metal"]
  },
  {
    "number": 22,
    "symbol": "Ti",
    "name": "Titanium",
    "mass": 47.867,
    "category": "metal",
    "group": 4,
    "period": 4,
    "x": 4,
    "y": 4,
    "econfig": "[Ar] 3d2 4s2",
    "props": ["Transition metal"]
  },
  {
    "number": 23,
    "symbol": "V",
    "name": "Vanadium",
    "mass": 50.9415,
    "category": "metal",
    "group": 5,
    "period": 4,
    "x": 5,
    "y": 4,
    "econfig": "[Ar] 3d3 4s2",
    "props": ["Transition metal"]
  },
  {
    "number": 24,
    "symbol": "Cr",
    "name": "Chromium",
    "mass": 51.9961,
    "category": "metal",
    "group": 6,
    "period": 4,
    "x": 6,
    "y": 4,
    "econfig": "[Ar] 3d5 4s1",
    "props": ["Transition metal"]
  },
  {
    "number": 25,
    "symbol": "Mn",
    "name": "Manganese",
    "mass": 54.938,
    "category": "metal",
    "group": 7,
    "period": 4,
    "x": 7,
    "y": 4,
    "econfig": "[Ar] 3d5 4s2",
    "props": ["Transition metal"]
  },
  {
    "number": 26,
    "symbol": "Fe",
    "name": "Iron",
    "mass": 55.845,
    "category": "metal",
    "group": 8,
    "period": 4,
    "x": 8,
    "y": 4,
    "econfig": "[Ar] 3d6 4s2",
    "props": ["Transition metal"]
  },
  {
    "number": 27,
    "symbol": "Co",
    "name": "Cobalt",
    "mass": 58.9332,
    "category": "metal",
    "group": 9,
    "period": 4,
    "x": 9,
    "y": 4,
    "econfig": "[Ar] 3d7 4s2",
    "props": ["Transition metal"]
  },
  {
    "number": 28,
    "symbol": "Ni",
    "name": "Nickel",
    "mass": 58.6934,
    "category": "metal",
    "group": 10,
    "period": 4,
    "x": 10,
    "y": 4,
    "econfig": "[Ar] 3d8 4s2",
    "props": ["Transition metal"]
  },
  {
    "number": 29,
    "symbol": "Cu",
    "name": "Copper",
    "mass": 63.546,
    "category": "metal",
    "group": 11,
    "period": 4,
    "x": 11,
    "y": 4,
    "econfig": "[Ar] 3d10 4s1",
    "props": ["Transition metal"]
  },
  {
    "number": 30,
    "symbol": "Zn",
    "name": "Zinc",
    "mass": 65.38,
    "category": "metal",
    "group": 12,
    "period": 4,
    "x": 12,
    "y": 4,
    "econfig": "[Ar] 3d10 4s2",
    "props": ["Post-transition metal"]
  },
  {
    "number": 31,
    "symbol": "Ga",
    "name": "Gallium",
    "mass": 69.723,
    "category": "metal",
    "group": 13,
    "period": 4,
    "x": 13,
    "y": 4,
    "econfig": "[Ar] 3d10 4s2 4p1",
    "props": ["Post-transition metal"]
  },
  {
    "number": 32,
    "symbol": "Ge",
    "name": "Germanium",
    "mass": 72.63,
    "category": "metalloid",
    "group": 14,
    "period": 4,
    "x": 14,
    "y": 4,
    "econfig": "[Ar] 3d10 4s2 4p2",
    "props": ["Metalloid"]
  },
  {
    "number": 33,
    "symbol": "As",
    "name": "Arsenic",
    "mass": 74.9216,
    "category": "metalloid",
    "group": 15,
    "period": 4,
    "x": 15,
    "y": 4,
    "econfig": "[Ar] 3d10 4s2 4p3",
    "props": ["Metalloid"]
  },
  {
    "number": 34,
    "symbol": "Se",
    "name": "Selenium",
    "mass": 78.971,
    "category": "nonmetal",
    "group": 16,
    "period": 4,
    "x": 16,
    "y": 4,
    "econfig": "[Ar] 3d10 4s2 4p4",
    "props": ["Solid at STP"]
  },
  {
    "number": 35,
    "symbol": "Br",
    "name": "Bromine",
    "mass": 79.904,
    "category": "nonmetal",
    "group": 17,
    "period": 4,
    "x": 17,
    "y": 4,
    "econfig": "[Ar] 3d10 4s2 4p5",
    "props": ["Liquid at STP"]
  },
  {
    "number": 36,
    "symbol": "Kr",
    "name": "Krypton",
    "mass": 83.798,
    "category": "noble",
    "group": 18,
    "period": 4,
    "x": 18,
    "y": 4,
    "econfig": "[Ar] 3d10 4s2 4p6",
    "props": ["Inert gas"]
  },
  {
    "number": 37,
    "symbol": "Rb",
    "name": "Rubidium",
    "mass": 85.4678,
    "category": "metal",
    "group": 1,
    "period": 5,
    "x": 1,
    "y": 5,
    "econfig": "[Kr] 5s1",
    "props": ["Alkali metal"]
  },
  {
    "number": 38,
    "symbol": "Sr",
    "name": "Strontium",
    "mass": 87.62,
    "category": "metal",
    "group": 2,
    "period": 5,
    "x": 2,
    "y": 5,
    "econfig": "[Kr] 5s2",
    "props": ["Alkaline earth metal"]
  },
  {
    "number": 39,
    "symbol": "Y",
    "name": "Yttrium",
    "mass": 88.9058,
    "category": "metal",
    "group": 3,
    "period": 5,
    "x": 3,
    "y": 5,
    "econfig": "[Kr] 4d1 5s2",
    "props": ["Transition metal"]
  },
  {
    "number": 40,
    "symbol": "Zr",
    "name": "Zirconium",
    "mass": 91.224,
    "category": "metal",
    "group": 4,
    "period": 5,
    "x": 4,
    "y": 5,
    "econfig": "[Kr] 4d2 5s2",
    "props": ["Transition metal"]
  },
  {
    "number": 41,
    "symbol": "Nb",
    "name": "Niobium",
    "mass": 92.9064,
    "category": "metal",
    "group": 5,
    "period": 5,
    "x": 5,
    "y": 5,
    "econfig": "[Kr] 4d4 5s1",
    "props": ["Transition metal"]
  },
  {
    "number": 42,
    "symbol": "Mo",
    "name": "Molybdenum",
    "mass": 95.95,
    "category": "metal",
    "group": 6,
    "period": 5,
    "x": 6,
    "y": 5,
    "econfig": "[Kr] 4d5 5s1",
    "props": ["Transition metal"]
  },
  {
    "number": 43,
    "symbol": "Tc",
    "name": "Technetium",
    "mass": 98,
    "category": "metal",
    "group": 7,
    "period": 5,
    "x": 7,
    "y": 5,
    "econfig": "[Kr] 4d5 5s2",
    "props": ["Radioactive"]
  },
  {
    "number": 44,
    "symbol": "Ru",
    "name": "Ruthenium",
    "mass": 101.07,
    "category": "metal",
    "group": 8,
    "period": 5,
    "x": 8,
    "y": 5,
    "econfig": "[Kr] 4d7 5s1",
    "props": ["Transition metal"]
  },
  {
    "number": 45,
    "symbol": "Rh",
    "name": "Rhodium",
    "mass": 102.9055,
    "category": "metal",
    "group": 9,
    "period": 5,
    "x": 9,
    "y": 5,
    "econfig": "[Kr] 4d8 5s1",
    "props": ["Transition metal"]
  },
  {
    "number": 46,
    "symbol": "Pd",
    "name": "Palladium",
    "mass": 106.42,
    "category": "metal",
    "group": 10,
    "period": 5,
    "x": 10,
    "y": 5,
    "econfig": "[Kr] 4d10",
    "props": ["Transition metal"]
  },
  {
    "number": 47,
    "symbol": "Ag",
    "name": "Silver",
    "mass": 107.8682,
    "category": "metal",
    "group": 11,
    "period": 5,
    "x": 11,
    "y": 5,
    "econfig": "[Kr] 4d10 5s1",
    "props": ["Transition metal"]
  },
  {
    "number": 48,
    "symbol": "Cd",
    "name": "Cadmium",
    "mass": 112.414,
    "category": "metal",
    "group": 12,
    "period": 5,
    "x": 12,
    "y": 5,
    "econfig": "[Kr] 4d10 5s2",
    "props": ["Post-transition metal"]
  },
  {
    "number": 49,
    "symbol": "In",
    "name": "Indium",
    "mass": 114.818,
    "category": "metal",
    "group": 13,
    "period": 5,
    "x": 13,
    "y": 5,
    "econfig": "[Kr] 4d10 5s2 5p1",
    "props": ["Post-transition metal"]
  },
  {
    "number": 50,
    "symbol": "Sn",
    "name": "Tin",
    "mass": 118.71,
    "category": "metal",
    "group": 14,
    "period": 5,
    "x": 14,
    "y": 5,
    "econfig": "[Kr] 4d10 5s2 5p2",
    "props": ["Post-transition metal"]
  },
  {
    "number": 51,
    "symbol": "Sb",
    "name": "Antimony",
    "mass": 121.76,
    "category": "metalloid",
    "group": 15,
    "period": 5,
    "x": 15,
    "y": 5,
    "econfig": "[Kr] 4d10 5s2 5p3",
    "props": ["Metalloid"]
  },
  {
    "number": 52,
    "symbol": "Te",
    "name": "Tellurium",
    "mass": 127.6,
    "category": "metalloid",
    "group": 16,
    "period": 5,
    "x": 16,
    "y": 5,
    "econfig": "[Kr] 4d10 5s2 5p4",
    "props": ["Metalloid"]
  },
  {
    "number": 53,
    "symbol": "I",
    "name": "Iodine",
    "mass": 126.9045,
    "category": "nonmetal",
    "group": 17,
    "period": 5,
    "x": 17,
    "y": 5,
    "econfig": "[Kr] 4d10 5s2 5p5",
    "props": ["Halogen"]
  },
  {
    "number": 54,
    "symbol": "Xe",
    "name": "Xenon",
    "mass": 131.293,
    "category": "noble",
    "group": 18,
    "period": 5,
    "x": 18,
    "y": 5,
    "econfig": "[Kr] 4d10 5s2 5p6",
    "props": ["Inert gas"]
  },
  {
    "number": 55,
    "symbol": "Cs",
    "name": "Cesium",
    "mass": 132.9055,
    "category": "metal",
    "group": 1,
    "period": 6,
    "x": 1,
    "y": 6,
    "econfig": "[Xe] 6s1",
    "props": ["Alkali metal"]
  },
  {
    "number": 56,
    "symbol": "Ba",
    "name": "Barium",
    "mass": 137.327,
    "category": "metal",
    "group": 2,
    "period": 6,
    "x": 2,
    "y": 6,
    "econfig": "[Xe] 6s2",
    "props": ["Alkaline earth metal"]
  },
  {
    "number": 57,
    "symbol": "La",
    "name": "Lanthanum",
    "mass": 138.9055,
    "category": "lanthanide",
    "group": 3,
    "period": 6,
    "x": 3,
    "y": 8,
    "econfig": "[Xe] 5d1 6s2",
    "props": ["Lanthanide"]
  },
  {
    "number": 58,
    "symbol": "Ce",
    "name": "Cerium",
    "mass": 140.116,
    "category": "lanthanide",
    "group": 3,
    "period": 6,
    "x": 4,
    "y": 8,
    "econfig": "[Xe] 4f1 5d1 6s2",
    "props": ["Lanthanide"]
  },
  {
    "number": 59,
    "symbol": "Pr",
    "name": "Praseodymium",
    "mass": 140.9077,
    "category": "lanthanide",
    "group": 3,
    "period": 6,
    "x": 5,
    "y": 8,
    "econfig": "[Xe] 4f3 6s2",
    "props": ["Lanthanide"]
  },
  {
    "number": 60,
    "symbol": "Nd",
    "name": "Neodymium",
    "mass": 144.242,
    "category": "lanthanide",
    "group": 3,
    "period": 6,
    "x": 6,
    "y": 8,
    "econfig": "[Xe] 4f4 6s2",
    "props": ["Lanthanide"]
  },
  {
    "number": 61,
    "symbol": "Pm",
    "name": "Promethium",
    "mass": 145,
    "category": "lanthanide",
    "group": 8,
    "period": 6,
    "x": 7,
    "y": 8,
    "econfig": "[Xe] 4f5 6s2",
    "props": ["Radioactive"]
  },
  {
    "number": 62,
    "symbol": "Sm",
    "name": "Samarium",
    "mass": 150.36,
    "category": "lanthanide",
    "group": 3,
    "period": 6,
    "x": 8,
    "y": 8,
    "econfig": "[Xe] 4f6 6s2",
    "props": ["Lanthanide"]
  },
  {
    "number": 63,
    "symbol": "Eu",
    "name": "Europium",
    "mass": 151.964,
    "category": "lanthanide",
    "group": 3,
    "period": 6,
    "x": 9,
    "y": 8,
    "econfig": "[Xe] 4f7 6s2",
    "props": ["Lanthanide"]
  },
  {
    "number": 64,
    "symbol": "Gd",
    "name": "Gadolinium",
    "mass": 157.25,
    "category": "lanthanide",
    "group": 3,
    "period": 6,
    "x": 10,
    "y": 8,
    "econfig": "[Xe] 4f7 5d1 6s2",
    "props": ["Lanthanide"]
  },
  {
    "number": 65,
    "symbol": "Tb",
    "name": "Terbium",
    "mass": 158.9254,
    "category": "lanthanide",
    "group": 3,
    "period": 6,
    "x": 11,
    "y": 8,
    "econfig": "[Xe] 4f9 6s2",
    "props": ["Lanthanide"]
  },
  {
    "number": 66,
    "symbol": "Dy",
    "name": "Dysprosium",
    "mass": 162.5,
    "category": "lanthanide",
    "group": 3,
    "period": 6,
    "x": 12,
    "y": 8,
    "econfig": "[Xe] 4f10 6s2",
    "props": ["Lanthanide"]
  },
  {
    "number": 67,
    "symbol": "Ho",
    "name": "Holmium",
    "mass": 164.9303,
    "category": "lanthanide",
    "group": 3,
    "period": 6,
    "x": 13,
    "y": 8,
    "econfig": "[Xe] 4f11 6s2",
    "props": ["Lanthanide"]
  },
  {
    "number": 68,
    "symbol": "Er",
    "name": "Erbium",
    "mass": 167.259,
    "category": "lanthanide",
    "group": 3,
    "period": 6,
    "x": 14,
    "y": 8,
    "econfig": "[Xe] 4f12 6s2",
    "props": ["Lanthanide"]
  },
  {
    "number": 69,
    "symbol": "Tm",
    "name": "Thulium",
    "mass": 168.9342,
    "category": "lanthanide",
    "group": 3,
    "period": 6,
    "x": 15,
    "y": 8,
    "econfig": "[Xe] 4f13 6s2",
    "props": ["Lanthanide"]
  },
  {
    "number": 70,
    "symbol": "Yb",
    "name": "Ytterbium",
    "mass": 173.045,
    "category": "lanthanide",
    "group": 3,
    "period": 6,
    "x": 16,
    "y": 8,
    "econfig": "[Xe] 4f14 6s2",
    "props": ["Lanthanide"]
  },
  {
    "number": 71,
    "symbol": "Lu",
    "name": "Lutetium",
    "mass": 174.9668,
    "category": "lanthanide",
    "group": 3,
    "period": 6,
    "x": 17,
    "y": 8,
    "econfig": "[Xe] 4f14 5d1 6s2",
    "props": ["Lanthanide"]
  },
  {
    "number": 72,
    "symbol": "Hf",
    "name": "Hafnium",
    "mass": 178.49,
    "category": "metal",
    "group": 4,
    "period": 6,
    "x": 4,
    "y": 6,
    "econfig": "[Xe] 4f14 5d2 6s2",
    "props": ["Transition metal"]
  },
  {
    "number": 73,
    "symbol": "Ta",
    "name": "Tantalum",
    "mass": 180.9479,
    "category": "metal",
    "group": 5,
    "period": 6,
    "x": 5,
    "y": 6,
    "econfig": "[Xe] 4f14 5d3 6s2",
    "props": ["Transition metal"]
  },
  {
    "number": 74,
    "symbol": "W",
    "name": "Tungsten",
    "mass": 183.84,
    "category": "metal",
    "group": 6,
    "period": 6,
    "x": 6,
    "y": 6,
    "econfig": "[Xe] 4f14 5d4 6s2",
    "props": ["Transition metal"]
  },
  {
    "number": 75,
    "symbol": "Re",
    "name": "Rhenium",
    "mass": 186.207,
    "category": "metal",
    "group": 7,
    "period": 6,
    "x": 7,
    "y": 6,
    "econfig": "[Xe] 4f14 5d5 6s2",
    "props": ["Transition metal"]
  },
  {
    "number": 76,
    "symbol": "Os",
    "name": "Osmium",
    "mass": 190.23,
    "category": "metal",
    "group": 8,
    "period": 6,
    "x": 8,
    "y": 6,
    "econfig": "[Xe] 4f14 5d6 6s2",
    "props": ["Transition metal"]
  },
  {
    "number": 77,
    "symbol": "Ir",
    "name": "Iridium",
    "mass": 192.217,
    "category": "metal",
    "group": 9,
    "period": 6,
    "x": 9,
    "y": 6,
    "econfig": "[Xe] 4f14 5d7 6s2",
    "props": ["Transition metal"]
  },
  {
    "number": 78,
    "symbol": "Pt",
    "name": "Platinum",
    "mass": 195.084,
    "category": "metal",
    "group": 10,
    "period": 6,
    "x": 10,
    "y": 6,
    "econfig": "[Xe] 4f14 5d9 6s1",
    "props": ["Transition metal"]
  },
  {
    "number": 79,
    "symbol": "Au",
    "name": "Gold",
    "mass": 196.9666,
    "category": "metal",
    "group": 11,
    "period": 6,
    "x": 11,
    "y": 6,
    "econfig": "[Xe] 4f14 5d10 6s1",
    "props": ["Transition metal"]
  },
  {
    "number": 80,
    "symbol": "Hg",
    "name": "Mercury",
    "mass": 200.592,
    "category": "metal",
    "group": 12,
    "period": 6,
    "x": 12,
    "y": 6,
    "econfig": "[Xe] 4f14 5d10 6s2",
    "props": ["Liquid at STP"]
  },
  {
    "number": 81,
    "symbol": "Tl",
    "name": "Thallium",
    "mass": 204.38,
    "category": "metal",
    "group": 13,
    "period": 6,
    "x": 13,
    "y": 6,
    "econfig": "[Xe] 4f14 5d10 6s2 6p1",
    "props": ["Post-transition metal"]
  },
  {
    "number": 82,
    "symbol": "Pb",
    "name": "Lead",
    "mass": 207.2,
    "category": "metal",
    "group": 14,
    "period": 6,
    "x": 14,
    "y": 6,
    "econfig": "[Xe] 4f14 5d10 6s2 6p2",
    "props": ["Post-transition metal"]
  },
  {
    "number": 83,
    "symbol": "Bi",
    "name": "Bismuth",
    "mass": 208.9804,
    "category": "metal",
    "group": 15,
    "period": 6,
    "x": 15,
    "y": 6,
    "econfig": "[Xe] 4f14 5d10 6s2 6p3",
    "props": ["Post-transition metal"]
  },
  {
    "number": 84,
    "symbol": "Po",
    "name": "Polonium",
    "mass": 209,
    "category": "metal",
    "group": 16,
    "period": 6,
    "x": 16,
    "y": 6,
    "econfig": "[Xe] 4f14 5d10 6s2 6p4",
    "props": ["Radioactive"]
  },
  {
    "number": 85,
    "symbol": "At",
    "name": "Astatine",
    "mass": 210,
    "category": "nonmetal",
    "group": 17,
    "period": 6,
    "x": 17,
    "y": 6,
    "econfig": "[Xe] 4f14 5d10 6s2 6p5",
    "props": ["Halogen"]
  },
  {
    "number": 86,
    "symbol": "Rn",
    "name": "Radon",
    "mass": 222,
    "category": "noble",
    "group": 18,
    "period": 6,
    "x": 18,
    "y": 6,
    "econfig": "[Xe] 4f14 5d10 6s2 6p6",
    "props": ["Inert gas"]
  },
  {
    "number": 87,
    "symbol": "Fr",
    "name": "Francium",
    "mass": 223,
    "category": "metal",
    "group": 1,
    "period": 7,
    "x": 1,
    "y": 7,
    "econfig": "[Rn] 7s1",
    "props": ["Alkali metal"]
  },
  {
    "number": 88,
    "symbol": "Ra",
    "name": "Radium",
    "mass": 226,
    "category": "metal",
    "group": 2,
    "period": 7,
    "x": 2,
    "y": 7,
    "econfig": "[Rn] 7s2",
    "props": ["Alkaline earth metal"]
  },
  {
    "number": 89,
    "symbol": "Ac",
    "name": "Actinium",
    "mass": 227,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "x": 3,
    "y": 9,
    "econfig": "[Rn] 6d1 7s2",
    "props": ["Actinide"]
  },
  {
    "number": 90,
    "symbol": "Th",
    "name": "Thorium",
    "mass": 232.0377,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "x": 4,
    "y": 9,
    "econfig": "[Rn] 6d2 7s2",
    "props": ["Actinide"]
  },
  {
    "number": 91,
    "symbol": "Pa",
    "name": "Protactinium",
    "mass": 231.0359,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "x": 5,
    "y": 9,
    "econfig": "[Rn] 5f2 6d1 7s2",
    "props": ["Actinide"]
  },
  {
    "number": 92,
    "symbol": "U",
    "name": "Uranium",
    "mass": 238.0289,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "x": 6,
    "y": 9,
    "econfig": "[Rn] 5f3 6d1 7s2",
    "props": ["Actinide"]
  },
  {
    "number": 93,
    "symbol": "Np",
    "name": "Neptunium",
    "mass": 237,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "x": 7,
    "y": 9,
    "econfig": "[Rn] 5f4 6d1 7s2",
    "props": ["Actinide"]
  },
  {
    "number": 94,
    "symbol": "Pu",
    "name": "Plutonium",
    "mass": 244,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "x": 8,
    "y": 9,
    "econfig": "[Rn] 5f6 7s2",
    "props": ["Actinide"]
  },
  {
    "number": 95,
    "symbol": "Am",
    "name": "Americium",
    "mass": 243,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "x": 9,
    "y": 9,
    "econfig": "[Rn] 5f7 7s2",
    "props": ["Actinide"]
  },
  {
    "number": 96,
    "symbol": "Cm",
    "name": "Curium",
    "mass": 247,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "x": 10,
    "y": 9,
    "econfig": "[Rn] 5f7 6d1 7s2",
    "props": ["Actinide"]
  },
  {
    "number": 97,
    "symbol": "Bk obligaciones",
    "name": "Berkelium",
    "mass": 247,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "x": 11,
    "y": 9,
    "econfig": "[Rn] 5f9 7s2",
    "props": ["Actinide"]
  },
  {
    "number": 98,
    "symbol": "Cf",
    "name": "Californium",
    "mass": 251,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "x": 12,
    "y": 9,
    "econfig": "[Rn] 5f10 7s2",
    "props": ["Actinide"]
  },
  {
    "number": 99,
    "symbol": "Es",
    "name": "Einsteinium",
    "mass": 252,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "x": 13,
    "y": 9,
    "econfig": "[Rn] 5f11 7s2",
    "props": ["Actinide"]
  },
  {
    "number": 100,
    "symbol": "Fm",
    "name": "Fermium",
    "mass": 257,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "x": 14,
    "y": 9,
    "econfig": "[Rn] 5f12 7s2",
    "props": ["Synthetic"]
  },
  {
    "number": 101,
    "symbol": "Md",
    "name": "Mendelevium",
    "mass": 258,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "x": 15,
    "y": 9,
    "econfig": "[Rn] 5f13 7s2",
    "props": ["Synthetic"]
  },
  {
    "number": 102,
    "symbol": "No",
    "name": "Nobelium",
    "mass": 259,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "x": 16,
    "y": 9,
    "econfig": "[Rn] 5f14 7s2",
    "props": ["Synthetic"]
  },
  {
    "number": 103,
    "symbol": "Lr",
    "name": "Lawrencium",
    "mass": 266,
    "category": "actinide",
    "group": 3,
    "period": 7,
    "x": 17,
    "y": 9,
    "econfig": "[Rn] 5f14 7s2 7p1",
    "props": ["Synthetic"]
  },
  {
    "number": 104,
    "symbol": "Rf",
    "name": "Rutherfordium",
    "mass": 267,
    "category": "transactinide",
    "group": 4,
    "period": 7,
    "x": 4,
    "y": 7,
    "econfig": "[Rn] 5f14 6d2 7s2",
    "props": ["Synthetic"]
  },
  {
    "number": 105,
    "symbol": "Db",
    "name": "Dubnium",
    "mass": 268,
    "category": "transactinide",
    "group": 5,
    "period": 7,
    "x": 5,
    "y": 7,
    "econfig": "[Rn] 5f14 6d3 7s2",
    "props": ["Synthetic"]
  },
  {
    "number": 106,
    "symbol": "Sg",
    "name": "Seaborgium",
 دوست: "Seaborgium",
    "mass": 269,
    "category": "transactinide",
    "group": 6,
    "period": 7,
    "x": 6,
    "y": 7,
    "econfig": "[Rn] 5f14 6d4 7s2",
    "props": ["Synthetic"]
  },
  {
    "number": 107,
    "symbol": "Bh",
    "name": "Bohrium",
    "mass": 270,
    "category": "transactinide",
    "group": 7,
    "period": 7,
    "x": 7,
    "y": 7,
    "econfig": "[Rn] 5f14 6d5 7s2",
    "props": ["Synthetic"]
  },
  {
    "number": 108,
    "symbol": "Hs",
    "name": "Hassium",
    "mass": 269,
    "category": "transactinide",
    "group": 8,
    "period": 7,
    "x": 8,
    "y": 7,
    "econfig": "[Rn] 5f14 6d6 7s2",
    "props": ["Synthetic"]
  },
  {
    "number": 109,
    "symbol": "Mt",
    "name": "Meitnerium",
    "mass": 278,
    "category": "transactinide",
    "group": 9,
    "period": 7,
    "x": 9,
    "y": 7,
    "econfig": "[Rn] 5f14 6d7 7s2",
    "props": ["Synthetic"]
  },
  {
    "number": 110,
    "symbol": "Ds",
    "name": "Darmstadtium",
    "mass": 281,
    "category": "transactinide",
    "group": 10,
    "period": 7,
    "x": 10,
    "y": 7,
    "econfig": "[Rn] 5f14 6d8 7s2",
    "props": ["Synthetic"]
  },
  {
    "number": 111,
    "symbol": "Rg",
    "name": "Roentgenium",
    "mass": 282,
    "category": "transactinide",
    "group": 11,
    "period": 7,
    "x": 11,
    "y": 7,
    "econfig": "[Rn] 5f14 6d9 7s2",
    "props": ["Synthetic"]
  },
  {
    "number": 112,
    "symbol": "Cn",
    "name": "Copernicium",
    "mass": 285,
    "category": "transactinide",
    "group": 12,
    "period": 7,
    "x": 12,
    "y": 7,
    "econfig": "[Rn] 5f14 6d10 7s2",
    "props": ["Synthetic"]
  },
  {
    "number": 113,
    "symbol": "Nh",
    "name": "Nihonium",
    "mass": 286,
    "category": "transactinide",
    "group": 13,
    "period": 7,
    "x": 13,
    "y": 7,
    "econfig": "[Rn] 5f14 6d10 7s2 7p1",
    "props": ["Synthetic"]
  },
  {
    "number": 114,
    "symbol": "Fl",
    "name": "Flerovium",
    "mass": 289,
    "category": "transactinide",
    "group": 14,
    "period": 7,
    "x": 14,
    "y": 7,
    "econfig": "[Rn] 5f14 6d10 7s2 7p2",
    "props": ["Synthetic"]
  },
  {
    "number": 115,
    "symbol": "Mc",
    "name": "Moscovium",
    "mass": 290,
    "category": "transactinide",
    "group": 15,
    "period": 7,
    "x": 15,
    "y": 7,
    "econfig": "[Rn] 5f14 6d10 7s2 7p3",
    "props": ["Synthetic"]
  },
  {
    "number": 116,
    "symbol": "Lv",
    "name": "Livermorium",
    "mass": 293,
    "category": "transactinide",
    "group": 16,
    "period": 7,
    "x": 16,
    "y": 7,
    "econfig": "[Rn] 5f14 6d10 7s2 7p4",
    "props": ["Synthetic"]
  },
  {
    "number": 117,
    "symbol": "Ts",
    "name": "Tennessine",
    "mass": 294,
    "category": "transactinide",
    "group": 17,
    "period": 7,
    "x": 17,
    "y": 7,
    "econfig": "[Rn] 5f14 6d10 7s2 7p5",
    "props": ["Synthetic"]
  },
  {
    "number": 118,
    "symbol": "Og",
    "name": "Oganesson",
    "mass": 294,
    "category": "noble",
    "group": 18,
    "period": 7,
    "x": 18,
    "y": 7,
    "econfig": "[Rn] 5f14 6d10 7s2 7p6",
    "props": ["Synthetic"]
  }
];

const catMap = {
  metal: "cat-metal",
  nonmetal: "cat-nonmetal",
  metalloid: "cat-metalloid",
  noble: "cat-noble",
  lanthanide: "cat-lanthanide",
  actinide: "cat-actinide",
  transactinide: "cat-transactinide"
};

const grid = document.getElementById("grid");
const q = document.getElementById("q");
const filter = document.getElementById("filter");
const countEl = document.getElementById("count");
const modal = document.getElementById("modal");

function render(elements) {
  const fragment = document.createDocumentFragment();
  elements.forEach(el => {
    const d = document.createElement("div");
    d.className = `elem ${catMap[el.category] || ''}`;
    d.style.gridColumnStart = el.x;
    d.style.gridRowStart = el.y;
    d.innerHTML = `
      <div class="num">${el.number}</div>
      <div class="sym">${el.symbol}</div>
      <div class="name">${el.name}</div>
      <div class="mass">${el.mass}</div>`;
    d.addEventListener("click", () => openModal(el));
    fragment.appendChild(d);
  });
  grid.innerHTML = "";
  grid.appendChild(fragment);
  countEl.textContent = elements.length;
}

function openModal(el) {
  document.getElementById("m-sym").textContent = el.symbol;
  document.getElementById("m-num").textContent = `#${el.number}`;
  document.getElementById("m-name").textContent = el.name;
  document.getElementById("m-cat").textContent = el.category + (el.group ? ` • Group ${el.group}` : "");
  document.getElementById("m-mass").textContent = `Atomic mass: ${el.mass} u`;
  document.getElementById("m-ec").textContent = el.econfig || "-";
  document.getElementById("m-props").textContent = el.props?.join(", ") || "-";
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

document.getElementById("close").addEventListener("click", closeModal);
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

function matchesFilter(el, qv, f) {
  if (f && f !== "all" && el.category !== f) return false;
  if (!qv) return true;
  qv = qv.toLowerCase();
  return (
    el.name.toLowerCase().includes(qv) ||
    el.symbol.toLowerCase().includes(qv) ||
    String(el.number) === qv
  );
}

function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

const refresh = debounce(() => {
  const qv = q.value.trim();
  const f = filter.value;
  const filtered = ELEMENTS.filter(el => matchesFilter(el, qv, f));
  render(filtered);
}, 300);

q.addEventListener("input", refresh);
filter.addEventListener("change", refresh);
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.classList.contains("show")) closeModal();
});

refresh();