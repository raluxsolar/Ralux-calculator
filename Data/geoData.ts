// /Data/geoData.ts

export type WindSpeedCategory = "T10" | "T50" | "T200" | "MRI 700" | "B.2.4" | "B.2.3";

export interface CityDesignRecord {
  cityCode: string; // e.g. "ACAPULCO_GRO"

  label: string;

  elevationM: number;

  wind: Partial<Record<WindSpeedCategory, number>>;
}

export interface CountryDesignConfig {
  countryCode: string; // e.g. "MX"
  label: string; // e.g. "Mexico"
  cities: CityDesignRecord[];
}

export const GEO_DESIGN_DATA: CountryDesignConfig[] = [
  {
    countryCode: "MX",
    label: "Mexico",
    cities: [
      {
        cityCode: "ACAPULCO_GRO",
        label: "Acapulco, Gro.",
        elevationM: 28,
        wind: {
          T10: 112,
          T50: 140.7,
          T200: 163.4,
          "MRI 700": 183.83109675249563,
        },
      },
      {
        cityCode: "AGUASCALIENTES_AGS",
        label: "Aguascalientes, Ags.",
        elevationM: 1908,
        wind: {
          T10: 111.4,
          T50: 134.4,
          T200: 152.7,
          "MRI 700": 169.17088416610875,
        },
      },
      {
        cityCode: "ALVARADO_VER",
        label: "Alvarado, Ver.",
        elevationM: 10,
        wind: {
          T10: 114.4,
          T50: 131.1,
          T200: 148,
          "MRI 700": 163.21081652498572,
        },
      },
      {
        cityCode: "BAHIA_DE_LOS_ANGELES_B_C",
        label: "Bahía de los Ángeles, B. C.",
        elevationM: 11,
        wind: { T10: 100.3, T50: 115, T200: 132, "MRI 700": 147.3008213564945 },
      },
      {
        cityCode: "BASASEACHI_CHIH",
        label: "Basaseachi, Chih.",
        elevationM: 2100,
        wind: {
          T10: 99.3,
          T50: 112.4,
          T200: 123.2,
          "MRI 700": 132.92052180294945,
        },
      },
      {
        cityCode: "BUENAVISTA_EDO_MEX",
        label: "Buenavista, Edo. Méx.",
        elevationM: 2250,
        wind: {
          T10: 92.48,
          T50: 106.62,
          T200: 118.31,
          "MRI 700": 128.8315648033777,
        },
      },
      {
        cityCode: "CABO_SAN_LUCAS_BCS",
        label: "Cabo San Lucas, B.C.S.",
        elevationM: 10,
        wind: {
          T10: 136.2,
          T50: 173.66,
          T200: 202.84,
          "MRI 700": 229.10340983426528,
        },
      },
      {
        cityCode: "CALAKMUL_CAMP",
        label: "Calakmul, Camp.",
        elevationM: 250,
        wind: {
          T10: 72.3,
          T50: 82.3,
          T200: 91.1,
          "MRI 700": 99.02042517277361,
        },
      },
      {
        cityCode: "CAMPECHE_CAMP",
        label: "Campeche, Camp.",
        elevationM: 5,
        wind: {
          T10: 100.9,
          T50: 126.8,
          T200: 154.8,
          "MRI 700": 180.00135282246154,
        },
      },
      {
        cityCode: "CANCUN_Q_ROO",
        label: "Cancún, Q. Roo",
        elevationM: 10,
        wind: {
          T10: 131.51,
          T50: 195.92,
          T200: 241.09,
          "MRI 700": 281.745182392521,
        },
      },
      {
        cityCode: "CATAVINA_B_C",
        label: "Cataviña, B. C.",
        elevationM: 561,
        wind: {
          T10: 107.2,
          T50: 123.1,
          T200: 135.9,
          "MRI 700": 147.4206184331253,
        },
      },
      {
        cityCode: "CD_ACUNA_COAH",
        label: "Cd. Acuña, Coah.",
        elevationM: 280,
        wind: {
          T10: 125.77,
          T50: 142.02,
          T200: 154.05,
          "MRI 700": 164.8775812305076,
        },
      },
      {
        cityCode: "CD_APODACA_N_L",
        label: "Cd. Apodaca, N. L.",
        elevationM: 440,
        wind: {
          T10: 126.07,
          T50: 147.21,
          T200: 164.54,
          "MRI 700": 180.13783730047348,
        },
      },
      {
        cityCode: "CD_BENITO_JUAREZ_NL",
        label: "Cd. Benito Juárez, N.L.",
        elevationM: 500,
        wind: {
          T10: 126.45,
          T50: 147.74,
          T200: 165.24,
          "MRI 700": 180.99084551403845,
        },
      },
      {
        cityCode: "CD_CONSTITUCION_B_C_S",
        label: "Cd. Constitución, B. C. S.",
        elevationM: 25,
        wind: {
          T10: 102.5,
          T50: 135.6,
          T200: 160.8,
          "MRI 700": 183.4812175402154,
        },
      },
      {
        cityCode: "CD_DE_VILLA_DE_ALVAREZ_COL",
        label: "Cd. de Villa de Álvarez, Col.",
        elevationM: 505,
        wind: {
          T10: 94.71,
          T50: 118.31,
          T200: 134.79,
          "MRI 700": 149.62279623264877,
        },
      },
      {
        cityCode: "CD_DEL_CARMEN_CAMP",
        label: "Cd. del Carmen, Camp.",
        elevationM: 2,
        wind: {
          T10: 93.08,
          T50: 110.85,
          T200: 128.03,
          "MRI 700": 143.49283005321033,
        },
      },
      {
        cityCode: "CD_GENERAL_ESCOBEDO_N_L",
        label: "Cd. General Escobedo, N. L.",
        elevationM: 450,
        wind: {
          T10: 125.91,
          T50: 146.98,
          T200: 164.25,
          "MRI 700": 179.79383440156823,
        },
      },
      {
        cityCode: "CD_GUZMAN_JAL",
        label: "Cd. Guzmán, Jal.",
        elevationM: 1507,
        wind: {
          T10: 85.1,
          T50: 101.7,
          T200: 115.4,
          "MRI 700": 127.73066191670439,
        },
      },
      {
        cityCode: "CD_JUAREZ_CHIH",
        label: "Cd. Juárez, Chih.",
        elevationM: 1144,
        wind: {
          T10: 126.06,
          T50: 140.91,
          T200: 152.92,
          "MRI 700": 163.7295802642058,
        },
      },
      {
        cityCode: "CD_LOPEZ_MATEOS_EDO_MEX",
        label: "Cd. López Mateos, Edo. Méx.",
        elevationM: 2240,
        wind: {
          T10: 92.68,
          T50: 106.75,
          T200: 118.14,
          "MRI 700": 128.39155030885132,
        },
      },
      {
        cityCode: "CD_MADERO_TAMPS",
        label: "Cd. Madero, Tamps.",
        elevationM: 10,
        wind: {
          T10: 127.26,
          T50: 152.7,
          T200: 180.1,
          "MRI 700": 204.76132383340877,
        },
      },
      {
        cityCode: "CD_NEZAHUALCOYOTL_EDO_MEX",
        label: "Cd. Nezahualcóyotl, Edo. Méx.",
        elevationM: 2220,
        wind: {
          T10: 90.93,
          T50: 105.32,
          T200: 117.68,
          "MRI 700": 128.80459717448662,
        },
      },
      {
        cityCode: "CD_OBREGON_SON",
        label: "Cd. Obregón, Son.",
        elevationM: 100,
        wind: {
          T10: 131,
          T50: 152,
          T200: 168.9,
          "MRI 700": 184.11081652498572,
        },
      },
      {
        cityCode: "CD_SANTA_CATARINA_N_L",
        label: "Cd. Santa Catarina, N. L.",
        elevationM: 680,
        wind: {
          T10: 124.53,
          T50: 144.97,
          T200: 161.77,
          "MRI 700": 176.89081169347693,
        },
      },
      {
        cityCode: "CD_VALLES_S_L_P",
        label: "Cd. Valles, S. L. P.",
        elevationM: 120,
        wind: {
          T10: 108.22,
          T50: 124.92,
          T200: 137.97,
          "MRI 700": 149.71563051189725,
        },
      },
      {
        cityCode: "CD_VICTORIA_TAMPS",
        label: "Cd. Victoria, Tamps.",
        elevationM: 380,
        wind: {
          T10: 108.1,
          T50: 127.6,
          T200: 143.6,
          "MRI 700": 158.00077304140657,
        },
      },
      {
        cityCode: "CELAYA_GTO",
        label: "Celaya, Gto.",
        elevationM: 1767,
        wind: {
          T10: 100.11,
          T50: 115.28,
          T200: 124.83,
          "MRI 700": 133.42546140908956,
        },
      },
      {
        cityCode: "CELESTUN_YUC",
        label: "Celestún, Yuc.",
        elevationM: 0,
        wind: {
          T10: 107.5,
          T50: 135.1,
          T200: 162.7,
          "MRI 700": 187.54133349642635,
        },
      },
      {
        cityCode: "CHALCO_DE_DIAZ_COVARRUBIAS_EDO_MEX",
        label: "Chalco de Díaz Covarrubias, Edo. Méx.",
        elevationM: 2237,
        wind: {
          T10: 91.35,
          T50: 105.79,
          T200: 117.95,
          "MRI 700": 128.894587511469,
        },
      },
      {
        cityCode: "CHAPALA_JAL",
        label: "Chapala, Jal.",
        elevationM: 1515,
        wind: {
          T10: 106.1,
          T50: 122.1,
          T200: 134.9,
          "MRI 700": 146.4206184331253,
        },
      },
      {
        cityCode: "CHAPINGO_EDO_MEX",
        label: "Chapingo, Edo. Méx.",
        elevationM: 2250,
        wind: {
          T10: 88.3,
          T50: 103.7,
          T200: 117,
          "MRI 700": 128.97064259066923,
        },
      },
      {
        cityCode: "CHETUMAL_Q_ROO",
        label: "Chetumal, Q. Roo",
        elevationM: 3,
        wind: {
          T10: 96.4,
          T50: 150.1,
          T200: 189.7,
          "MRI 700": 225.34191327748127,
        },
      },
      {
        cityCode: "CHICOLOAPAN_DE_JUAREZ_EDO_MEX",
        label: "Chicoloapan de Juárez, Edo. Méx.",
        elevationM: 2250,
        wind: {
          T10: 90.1,
          T50: 104.42,
          T200: 116.47,
          "MRI 700": 127.31558219680933,
        },
      },
      {
        cityCode: "CHIHUAHUA_CHIH",
        label: "Chihuahua, Chih.",
        elevationM: 1423,
        wind: {
          T10: 116.1,
          T50: 134.9,
          T200: 150,
          "MRI 700": 163.59072955782744,
        },
      },
      {
        cityCode: "CHILPANCINGO_GRO",
        label: "Chilpancingo, Gro.",
        elevationM: 1369,
        wind: {
          T10: 112.9,
          T50: 129.7,
          T200: 143.3,
          "MRI 700": 155.54065708519562,
        },
      },
      {
        cityCode: "CHIMALHUACAN_EDO_MEX",
        label: "Chimalhuacán, Edo. Méx.",
        elevationM: 2250,
        wind: {
          T10: 90.76,
          T50: 105.14,
          T200: 117.46,
          "MRI 700": 128.54859524188305,
        },
      },
      {
        cityCode: "CIUDAD_ALEMAN_VER",
        label: "Ciudad Alemán, Ver.",
        elevationM: 20,
        wind: {
          T10: 81.2,
          T50: 92.6,
          T200: 102.2,
          "MRI 700": 110.84046382484397,
        },
      },
      {
        cityCode: "CIUDAD_DE_MEXICO",
        label: "Ciudad de México.",
        elevationM: 2240,
        wind: {
          T10: 104.1,
          T50: 118.8,
          T200: 130.8,
          "MRI 700": 141.60057978105496,
        },
      },
      {
        cityCode: "COATZACOALCOS_VER",
        label: "Coatzacoalcos, Ver.",
        elevationM: 14,
        wind: {
          T10: 122.8,
          T50: 140,
          T200: 153.9,
          "MRI 700": 166.410671579722,
        },
      },
      {
        cityCode: "COLIMA_COL",
        label: "Colima, Col.",
        elevationM: 494,
        wind: {
          T10: 95.57,
          T50: 119.67,
          T200: 136.81,
          "MRI 700": 152.2368281206068,
        },
      },
      {
        cityCode: "COLOTLAN_JAL",
        label: "Colotlán, Jal.",
        elevationM: 1589,
        wind: {
          T10: 126.2,
          T50: 147.3,
          T200: 164.1,
          "MRI 700": 179.2208116934769,
        },
      },
      {
        cityCode: "COMITAN_CHIS",
        label: "Comitán, Chis.",
        elevationM: 1530,
        wind: {
          T10: 86.4,
          T50: 98.4,
          T200: 108.3,
          "MRI 700": 117.21047831937031,
        },
      },
      {
        cityCode: "CORDOBA_VER",
        label: "Córdoba, Ver.",
        elevationM: 860,
        wind: {
          T10: 129.23,
          T50: 151.07,
          T200: 170.31,
          "MRI 700": 187.62692958229144,
        },
      },
      {
        cityCode: "COZUMEL_Q_ROO",
        label: "Cozumel, Q. Roo",
        elevationM: 10,
        wind: {
          T10: 135.4,
          T50: 198.7,
          T200: 245.5,
          "MRI 700": 287.6222611461143,
        },
      },
      {
        cityCode: "CUATRO_CIENEGAS_COAH",
        label: "Cuatro Ciénegas, Coah.",
        elevationM: 740,
        wind: {
          T10: 119,
          T50: 131.9,
          T200: 142.6,
          "MRI 700": 152.23051697144064,
        },
      },
      {
        cityCode: "CUAUTITLAN_IZCALLI_EDO_MEX",
        label: "Cuautitlán Izcalli, Edo. Méx.",
        elevationM: 2280,
        wind: {
          T10: 92.88,
          T50: 107,
          T200: 118.47,
          "MRI 700": 128.79355417405833,
        },
      },
      {
        cityCode: "CUAUTLA_MOR",
        label: "Cuautla, Mor.",
        elevationM: 1300,
        wind: {
          T10: 95.86,
          T50: 111.01,
          T200: 123.25,
          "MRI 700": 134.26659137667605,
        },
      },
      {
        cityCode: "CUERNAVACA_MOR",
        label: "Cuernavaca, Mor.",
        elevationM: 1560,
        wind: {
          T10: 94.7,
          T50: 110.3,
          T200: 122.9,
          "MRI 700": 134.24060877010768,
        },
      },
      {
        cityCode: "CULIACAN_SIN",
        label: "Culiacán, Sin.",
        elevationM: 84,
        wind: {
          T10: 102.2,
          T50: 130.8,
          T200: 154.9,
          "MRI 700": 176.59116439361867,
        },
      },
      {
        cityCode: "DELICIAS_CHIH",
        label: "Delicias, Chih.",
        elevationM: 1170,
        wind: {
          T10: 131.3,
          T50: 148.5,
          T200: 162.4,
          "MRI 700": 174.910671579722,
        },
      },
      {
        cityCode: "DURANGO_DGO",
        label: "Durango, Dgo.",
        elevationM: 1889,
        wind: {
          T10: 110.6,
          T50: 126.2,
          T200: 138.9,
          "MRI 700": 150.33061360161648,
        },
      },
      {
        cityCode: "ECATEPEC_DE_MORELOS_EDO_MEX",
        label: "Ecatepec de Morelos, Edo. Méx.",
        elevationM: 2250,
        wind: {
          T10: 91.47,
          T50: 105.65,
          T200: 117.47,
          "MRI 700": 128.1085710843391,
        },
      },
      {
        cityCode: "EMPALME_SON",
        label: "Empalme, Son.",
        elevationM: 10,
        wind: {
          T10: 99.6,
          T50: 123.6,
          T200: 145.4,
          "MRI 700": 165.0210532689165,
        },
      },
      {
        cityCode: "ENSENADA_B_C",
        label: "Ensenada, B. C.",
        elevationM: 13,
        wind: {
          T10: 81,
          T50: 96.8,
          T200: 109.6,
          "MRI 700": 121.12061843312526,
        },
      },
      {
        cityCode: "ESCARCEGA_CAMP",
        label: "Escárcega, Camp.",
        elevationM: 60,
        wind: {
          T10: 85.5,
          T50: 98.4,
          T200: 109.6,
          "MRI 700": 119.6805411289846,
        },
      },
      {
        cityCode: "FELIPE_CARRILLO_PUERTO_Q_ROO",
        label: "Felipe Carrillo Puerto, Q. Roo",
        elevationM: 20,
        wind: {
          T10: 96,
          T50: 140.4,
          T200: 171.9,
          "MRI 700": 200.25152192526923,
        },
      },
      {
        cityCode: "FRESNILLO_ZAC",
        label: "Fresnillo, Zac.",
        elevationM: 2210,
        wind: {
          T10: 119.91,
          T50: 137.53,
          T200: 151.67,
          "MRI 700": 164.39668317534304,
        },
      },
      {
        cityCode: "GOMEZ_PALACIO_DGO",
        label: "Gómez Palacio, Dgo.",
        elevationM: 1132,
        wind: {
          T10: 132.12,
          T50: 155.18,
          T200: 175.05,
          "MRI 700": 192.9339600207968,
        },
      },
      {
        cityCode: "GUADALAJARA_JAL",
        label: "Guadalajara, Jal.",
        elevationM: 1589,
        wind: {
          T10: 92.8,
          T50: 107.6,
          T200: 119.7,
          "MRI 700": 130.59058461256373,
        },
      },
      {
        cityCode: "GUADALUPE_N_L",
        label: "Guadalupe, N. L.",
        elevationM: 500,
        wind: {
          T10: 126.04,
          T50: 147.16,
          T200: 164.47,
          "MRI 700": 180.04983633417174,
        },
      },
      {
        cityCode: "GUANAJUATO_GTO",
        label: "Guanajuato, Gto.",
        elevationM: 2050,
        wind: {
          T10: 137.9,
          T50: 157,
          T200: 171.5,
          "MRI 700": 184.55070056877472,
        },
      },
      {
        cityCode: "GUAYMAS_SON",
        label: "Guaymas, Son.",
        elevationM: 44,
        wind: {
          T10: 97.9,
          T50: 123.6,
          T200: 146.8,
          "MRI 700": 167.68112091003957,
        },
      },
      {
        cityCode: "GUSTAVO_DIAZ_ORDAZ_B_C_S",
        label: "Gustavo Díaz Ordaz, B. C. S.",
        elevationM: 20,
        wind: {
          T10: 84.1,
          T50: 104.3,
          T200: 123,
          "MRI 700": 139.83090349214393,
        },
      },
      {
        cityCode: "HERMOSILLO_SON",
        label: "Hermosillo, Son.",
        elevationM: 237,
        wind: {
          T10: 89.2,
          T50: 106.6,
          T200: 120.7,
          "MRI 700": 133.39068124273956,
        },
      },
      {
        cityCode: "HEROICA_MATAMOROS_TAMPS",
        label: "Heroica Matamoros, Tamps.",
        elevationM: 8,
        wind: {
          T10: 113.2,
          T50: 164.6,
          T200: 204.7,
          "MRI 700": 240.79193743502523,
        },
      },
      {
        cityCode: "HEROICA_NOGALES_SON",
        label: "Heroica Nogales, Son.",
        elevationM: 1199,
        wind: {
          T10: 112.11,
          T50: 125.7,
          T200: 137.16,
          "MRI 700": 147.47455369090744,
        },
      },
      {
        cityCode: "HIDALGO_DEL_PARRAL_CHIH",
        label: "Hidalgo del Parral, Chih.",
        elevationM: 1661,
        wind: {
          T10: 127.4,
          T50: 149.2,
          T200: 166.5,
          "MRI 700": 182.0708358510209,
        },
      },
      {
        cityCode: "HUAJUAPAN_DE_LEON_OAX",
        label: "Huajuapan de León, Oax.",
        elevationM: 1600,
        wind: {
          T10: 105.9,
          T50: 121.9,
          T200: 134.9,
          "MRI 700": 146.60062809614286,
        },
      },
      {
        cityCode: "HUATULCO_OAX",
        label: "Huatulco, Oax.",
        elevationM: 60,
        wind: {
          T10: 106.5,
          T50: 151.9,
          T200: 185.3,
          "MRI 700": 215.36161372393627,
        },
      },
      {
        cityCode: "HUIXQUILUCAN_EDO_MEX",
        label: "Huixquilucan, Edo. Méx.",
        elevationM: 2700,
        wind: {
          T10: 92.34,
          T50: 106.42,
          T200: 117.86,
          "MRI 700": 128.15655272460572,
        },
      },
      {
        cityCode: "IGUALA_DE_LA_INDEPENDENCIA_GRO",
        label: "Iguala de la Independencia, Gro.",
        elevationM: 750,
        wind: {
          T10: 104.52,
          T50: 120.37,
          T200: 133.59,
          "MRI 700": 145.48863872546218,
        },
      },
      {
        cityCode: "IRAPUATO_GTO",
        label: "Irapuato, Gto.",
        elevationM: 1724,
        wind: {
          T10: 114.55,
          T50: 130.88,
          T200: 146.41,
          "MRI 700": 160.38775033331527,
        },
      },
      {
        cityCode: "ISLA_MUJERES_Q_ROO",
        label: "Isla Mujeres, Q. Roo",
        elevationM: 3,
        wind: {
          T10: 138,
          T50: 199.9,
          T200: 239.5,
          "MRI 700": 275.1419132774813,
        },
      },
      {
        cityCode: "ISLA_SOCORRO_COL",
        label: "Isla Socorro, Col.",
        elevationM: 1050,
        wind: {
          T10: 169,
          T50: 215,
          T200: 248.1,
          "MRI 700": 277.89159922940985,
        },
      },
      {
        cityCode: "IXTAPALUCA_EDO_MEX",
        label: "Ixtapaluca, Edo. Méx.",
        elevationM: 2250,
        wind: {
          T10: 90.74,
          T50: 105.1,
          T200: 117.16,
          "MRI 700": 128.0145826799602,
        },
      },
      {
        cityCode: "JIMENEZ_CHIH",
        label: "Jiménez, Chih.",
        elevationM: 1180,
        wind: {
          T10: 100,
          T50: 113.2,
          T200: 124.1,
          "MRI 700": 133.91052663445822,
        },
      },
      {
        cityCode: "JIUTEPEC_MOR",
        label: "Jiutepec, Mor.",
        elevationM: 1350,
        wind: {
          T10: 94.79,
          T50: 109.85,
          T200: 122.23,
          "MRI 700": 133.37259814078837,
        },
      },
      {
        cityCode: "LA_PAZ_B_C_S",
        label: "La Paz, B. C. S.",
        elevationM: 10,
        wind: {
          T10: 124.8,
          T50: 165,
          T200: 195,
          "MRI 700": 222.00144945263736,
        },
      },
      {
        cityCode: "LA_RUMOROSA_B_C",
        label: "La Rumorosa, B. C.",
        elevationM: 1250,
        wind: {
          T10: 117.3,
          T50: 131.1,
          T200: 142.1,
          "MRI 700": 152.00053146596701,
        },
      },
      {
        cityCode: "LAGOS_DE_MORENO_JAL",
        label: "Lagos de Moreno, Jal.",
        elevationM: 1942,
        wind: {
          T10: 119,
          T50: 134.3,
          T200: 146.7,
          "MRI 700": 157.86059910709008,
        },
      },
      {
        cityCode: "LAGUNA_VERDE_VER",
        label: "Laguna Verde, Ver.",
        elevationM: 10,
        wind: {
          T10: 133.48,
          T50: 153.95,
          T200: 170.29,
          "MRI 700": 184.99678946853646,
        },
      },
      {
        cityCode: "LAS_VEGAS_DGO",
        label: "Las Vegas, Dgo.",
        elevationM: 1500,
        wind: {
          T10: 83.2,
          T50: 94.2,
          T200: 103.4,
          "MRI 700": 111.6804444988088,
        },
      },
      {
        cityCode: "LAZARO_CARDENAS_MICH",
        label: "Lázaro Cárdenas, Mich.",
        elevationM: 10,
        wind: {
          T10: 126.2,
          T50: 165.2,
          T200: 194.2,
          "MRI 700": 220.30140113754942,
        },
      },
      {
        cityCode: "LEON_DE_LOS_ALDAMA_GTO",
        label: "León de los Aldama, Gto.",
        elevationM: 1885,
        wind: {
          T10: 120.66,
          T50: 137.52,
          T200: 152.8,
          "MRI 700": 166.5527382545433,
        },
      },
      {
        cityCode: "LORETO_B_C_S",
        label: "Loreto, B. C. S.",
        elevationM: 6,
        wind: {
          T10: 109.1,
          T50: 141.3,
          T200: 167.8,
          "MRI 700": 191.65128034982968,
        },
      },
      {
        cityCode: "LOS_MOCHIS_SIN",
        label: "Los Mochis, Sin.",
        elevationM: 8,
        wind: {
          T10: 113.75,
          T50: 147.16,
          T200: 177.75,
          "MRI 700": 205.28247795853923,
        },
      },
      {
        cityCode: "LOS_REYES_ACAQUILPAN_EDO_MEX",
        label: "Los Reyes Acaquilpan, Edo. Méx.",
        elevationM: 2250,
        wind: {
          T10: 91.1,
          T50: 105.5,
          T200: 117.86,
          "MRI 700": 128.9845971744866,
        },
      },
      {
        cityCode: "MANZANILLO_COL",
        label: "Manzanillo, Col.",
        elevationM: 8,
        wind: {
          T10: 137.2,
          T50: 184.2,
          T200: 218.3,
          "MRI 700": 248.99164754449782,
        },
      },
      {
        cityCode: "MATLAPA_SLP",
        label: "Matlapa, S.L.P.",
        elevationM: 60,
        wind: {
          T10: 97.2,
          T50: 114.4,
          T200: 128.4,
          "MRI 700": 141.00067641123076,
        },
      },
      {
        cityCode: "MAZATLAN_SIN",
        label: "Mazatlán, Sin.",
        elevationM: 8,
        wind: {
          T10: 124.6,
          T50: 172.6,
          T200: 207.5,
          "MRI 700": 238.9116861965681,
        },
      },
      {
        cityCode: "MERIDA_YUC",
        label: "Mérida, Yuc.",
        elevationM: 10,
        wind: {
          T10: 123.1,
          T50: 164.2,
          T200: 197.3,
          "MRI 700": 227.0915992294099,
        },
      },
      {
        cityCode: "METEPEC_EDO_MEX",
        label: "Metepec, Edo. Méx.",
        elevationM: 2610,
        wind: {
          T10: 90.15,
          T50: 103.73,
          T200: 113.05,
          "MRI 700": 121.43845029661932,
        },
      },
      {
        cityCode: "MEXICALI_B_C",
        label: "Mexicali, B. C.",
        elevationM: 1,
        wind: {
          T10: 110.2,
          T50: 123.2,
          T200: 133.7,
          "MRI 700": 143.15050730842304,
        },
      },
      {
        cityCode: "MINATITLAN_VER",
        label: "Minatitlán, Ver.",
        elevationM: 20,
        wind: {
          T10: 122.87,
          T50: 139.91,
          T200: 154,
          "MRI 700": 166.6816807595887,
        },
      },
      {
        cityCode: "MIRAMAR_TAMPS",
        label: "Miramar, Tamps.",
        elevationM: 10,
        wind: {
          T10: 128.07,
          T50: 153.58,
          T200: 181.07,
          "MRI 700": 205.81232818176667,
        },
      },
      {
        cityCode: "MONCLOVA_COAH",
        label: "Monclova, Coah.",
        elevationM: 591,
        wind: {
          T10: 122.9,
          T50: 143,
          T200: 159.2,
          "MRI 700": 173.78078270442415,
        },
      },
      {
        cityCode: "MONTERREY_N_L",
        label: "Monterrey, N. L.",
        elevationM: 538,
        wind: {
          T10: 126.2,
          T50: 147.5,
          T200: 164.5,
          "MRI 700": 179.8008213564945,
        },
      },
      {
        cityCode: "MORELIA_MICH",
        label: "Morelia, Mich.",
        elevationM: 1920,
        wind: {
          T10: 93,
          T50: 108.1,
          T200: 120.5,
          "MRI 700": 131.66059910709012,
        },
      },
      {
        cityCode: "NAUCALPAN_DE_JUAREZ_EDO_MEX",
        label: "Naucalpan de Juárez, Edo. Méx.",
        elevationM: 2300,
        wind: {
          T10: 92.61,
          T50: 106.73,
          T200: 118.57,
          "MRI 700": 129.22657205064087,
        },
      },
      {
        cityCode: "NAVOJOA_SON",
        label: "Navojoa, Son.",
        elevationM: 40,
        wind: {
          T10: 130.47,
          T50: 151.64,
          T200: 169.84,
          "MRI 700": 186.2208793346,
        },
      },
      {
        cityCode: "NOCHIXTLAN_OAX",
        label: "Nochixtlán, Oax.",
        elevationM: 2010,
        wind: {
          T10: 78.4,
          T50: 87.7,
          T200: 95.5,
          "MRI 700": 102.5203768576857,
        },
      },
      {
        cityCode: "NUEVO_CASAS_GRANDES_CHIH",
        label: "Nuevo Casas Grandes, Chih.",
        elevationM: 1550,
        wind: {
          T10: 121.6,
          T50: 141.9,
          T200: 158.1,
          "MRI 700": 172.68078270442416,
        },
      },
      {
        cityCode: "NUEVO_LAREDO_TAMPS",
        label: "Nuevo Laredo, Tamps.",
        elevationM: 135,
        wind: {
          T10: 114.86,
          T50: 130.24,
          T200: 140.98,
          "MRI 700": 150.64651890404414,
        },
      },
      {
        cityCode: "OAXACA_OAX",
        label: "Oaxaca, Oax.",
        elevationM: 1555,
        wind: {
          T10: 115.5,
          T50: 129,
          T200: 140,
          "MRI 700": 149.90053146596702,
        },
      },
      {
        cityCode: "OJINAGA_CHIH",
        label: "Ojinaga, Chih.",
        elevationM: 800,
        wind: {
          T10: 121.1,
          T50: 137.6,
          T200: 151.1,
          "MRI 700": 163.2506522536868,
        },
      },
      {
        cityCode: "OJO_DE_AGUA_EDO_MEX",
        label: "Ojo de Agua, Edo. Méx.",
        elevationM: 2250,
        wind: {
          T10: 91.4,
          T50: 105.48,
          T200: 117,
          "MRI 700": 127.36855658981274,
        },
      },
      {
        cityCode: "ORIZABA_VER",
        label: "Orizaba, Ver.",
        elevationM: 1284,
        wind: {
          T10: 129.8,
          T50: 152.7,
          T200: 171.1,
          "MRI 700": 187.66088899761758,
        },
      },
      {
        cityCode: "P_ALLENDE_GTO",
        label: "P. Allende, Gto.",
        elevationM: 1900,
        wind: {
          T10: 81,
          T50: 92.4,
          T200: 101.8,
          "MRI 700": 110.26045416182636,
        },
      },
      {
        cityCode: "PACHUCA_HGO",
        label: "Pachuca, Hgo.",
        elevationM: 2426,
        wind: {
          T10: 90.3,
          T50: 103.5,
          T200: 114.3,
          "MRI 700": 124.02052180294945,
        },
      },
      {
        cityCode: "PALENQUE_CHIS",
        label: "Palenque, Chis.",
        elevationM: 60,
        wind: {
          T10: 72.7,
          T50: 83.3,
          T200: 92.1,
          "MRI 700": 100.02042517277361,
        },
      },
      {
        cityCode: "PIEDRAS_NEGRAS_COAH",
        label: "Piedras Negras, Coah.",
        elevationM: 220,
        wind: {
          T10: 171.8,
          T50: 193.6,
          T200: 209.1,
          "MRI 700": 223.0507488838626,
        },
      },
      {
        cityCode: "PILARES_DE_NACOZARI_SON",
        label: "Pilares de Nacozari, Son.",
        elevationM: 1100,
        wind: {
          T10: 109.21,
          T50: 123.52,
          T200: 135.06,
          "MRI 700": 145.4465575561145,
        },
      },
      {
        cityCode: "PINOTEPA_OAX",
        label: "Pinotepa, Oax.",
        elevationM: 50,
        wind: {
          T10: 96.6,
          T50: 122.9,
          T200: 145.9,
          "MRI 700": 166.60111124702198,
        },
      },
      {
        cityCode: "PLAYA_DEL_CARMEN_Q_ROO",
        label: "Playa del Carmen, Q. Roo",
        elevationM: 10,
        wind: {
          T10: 131.64,
          T50: 190.63,
          T200: 236.21,
          "MRI 700": 277.23420220170703,
        },
      },
      {
        cityCode: "POZA_RICA_DE_HIDALGO_VER",
        label: "Poza Rica de Hidalgo, Ver.",
        elevationM: 60,
        wind: {
          T10: 92.13,
          T50: 111.74,
          T200: 127.77,
          "MRI 700": 142.19777449085922,
        },
      },
      {
        cityCode: "PROGRESO_YUC",
        label: "Progreso, Yuc.",
        elevationM: 8,
        wind: {
          T10: 130,
          T50: 189.6,
          T200: 231.4,
          "MRI 700": 269.02201957067473,
        },
      },
      {
        cityCode: "PUEBLA_PUE",
        label: "Puebla, Pue.",
        elevationM: 2150,
        wind: {
          T10: 99.8,
          T50: 114.3,
          T200: 126,
          "MRI 700": 136.53056528652857,
        },
      },
      {
        cityCode: "PUERTO_CORTES_B_C_S",
        label: "Puerto Cortés, B. C. S.",
        elevationM: 5,
        wind: {
          T10: 118.6,
          T50: 153.3,
          T200: 180.7,
          "MRI 700": 205.36132383340873,
        },
      },
      {
        cityCode: "PUERTO_PENASCO_SON",
        label: "Puerto Peñasco, Son.",
        elevationM: 10,
        wind: {
          T10: 97.5,
          T50: 114.2,
          T200: 129.4,
          "MRI 700": 143.08073438933627,
        },
      },
      {
        cityCode: "PUERTO_VALLARTA_JAL",
        label: "Puerto Vallarta, Jal.",
        elevationM: 2,
        wind: {
          T10: 114.16,
          T50: 145.71,
          T200: 170.34,
          "MRI 700": 192.50819000061526,
        },
      },
      {
        cityCode: "QUERETARO_QRO",
        label: "Querétaro, Qro.",
        elevationM: 1842,
        wind: {
          T10: 117.8,
          T50: 137.6,
          T200: 153.3,
          "MRI 700": 167.43075854688024,
        },
      },
      {
        cityCode: "REYNOSA_TAMPS",
        label: "Reynosa, Tamps.",
        elevationM: 33,
        wind: {
          T10: 99.15,
          T50: 115.56,
          T200: 131.64,
          "MRI 700": 146.1127769066136,
        },
      },
      {
        cityCode: "RIO_VERDE_S_L_P",
        label: "Río Verde, S. L. P.",
        elevationM: 987,
        wind: {
          T10: 117.68,
          T50: 137.12,
          T200: 155.12,
          "MRI 700": 171.32086967158241,
        },
      },
      {
        cityCode: "SALAMANCA_GTO",
        label: "Salamanca, Gto.",
        elevationM: 1720,
        wind: {
          T10: 101.74,
          T50: 117.1,
          T200: 128.03,
          "MRI 700": 137.86752808391088,
        },
      },
      {
        cityCode: "SALINA_CRUZ_OAX",
        label: "Salina Cruz, Oax.",
        elevationM: 6,
        wind: {
          T10: 108.3,
          T50: 127.1,
          T200: 142.3,
          "MRI 700": 155.98073438933628,
        },
      },
      {
        cityCode: "SALTILLO_COAH",
        label: "Saltillo, Coah.",
        elevationM: 1609,
        wind: {
          T10: 119.5,
          T50: 137.5,
          T200: 151.9,
          "MRI 700": 164.86069573726593,
        },
      },
      {
        cityCode: "SAN_CRISTOBAL_DE_LAS_CASAS_CHIS",
        label: "San Cristóbal de las Casas, Chis.",
        elevationM: 2276,
        wind: {
          T10: 82.1,
          T50: 95.3,
          T200: 106.1,
          "MRI 700": 115.82052180294943,
        },
      },
      {
        cityCode: "SAN_FRANCISCO_COACALCO_EDO_MEX",
        label: "San Francisco Coacalco, Edo. Méx.",
        elevationM: 2257,
        wind: {
          T10: 92.49,
          T50: 106.62,
          T200: 118.22,
          "MRI 700": 128.66056045501978,
        },
      },
      {
        cityCode: "SAN_JOSE_DEL_CABO_BCS",
        label: "San José del Cabo, B.C.S.",
        elevationM: 3,
        wind: {
          T10: 139.87,
          T50: 181.17,
          T200: 212.9,
          "MRI 700": 241.45853303773947,
        },
      },
      {
        cityCode: "SAN_JUAN_BAUTISTA_TUXTEPEC_OAX",
        label: "San Juan Bautista Tuxtepec, Oax.",
        elevationM: 20,
        wind: {
          T10: 83.14,
          T50: 94.68,
          T200: 102.01,
          "MRI 700": 108.6073541495944,
        },
      },
      {
        cityCode: "SAN_JUAN_DEL_RIO_QRO",
        label: "San Juan del Río, Qro.",
        elevationM: 1920,
        wind: {
          T10: 108.4,
          T50: 126.02,
          T200: 143.53,
          "MRI 700": 159.28984599718933,
        },
      },
      {
        cityCode: "SAN_JUANICO_B_C_S",
        label: "San Juanico, B. C. S.",
        elevationM: 15,
        wind: {
          T10: 104.1,
          T50: 137.5,
          T200: 162.9,
          "MRI 700": 185.76122720323298,
        },
      },
      {
        cityCode: "SAN_LUIS_POTOSI_S_L_P",
        label: "San Luis Potosí, S. L. P.",
        elevationM: 1864,
        wind: {
          T10: 129.2,
          T50: 151.2,
          T200: 168.9,
          "MRI 700": 184.83085517705607,
        },
      },
      {
        cityCode: "SAN_LUIS_RIO_COLORADO_SON",
        label: "San Luis Río Colorado, Son.",
        elevationM: 40,
        wind: {
          T10: 105.72,
          T50: 118.87,
          T200: 130.41,
          "MRI 700": 140.7965575561145,
        },
      },
      {
        cityCode: "SAN_NICOLAS_DE_LOS_GARZA_N_L",
        label: "San Nicolás de los Garza, N. L.",
        elevationM: 512,
        wind: {
          T10: 125.94,
          T50: 147.01,
          T200: 164.33,
          "MRI 700": 179.91883681732264,
        },
      },
      {
        cityCode: "SAN_PABLO_DE_LAS_SALINAS_EDO_MEX",
        label: "San Pablo de las Salinas, Edo. Méx.",
        elevationM: 2250,
        wind: {
          T10: 91.59,
          T50: 105.68,
          T200: 117.24,
          "MRI 700": 127.64455852241625,
        },
      },
      {
        cityCode: "SAN_PEDRO_GARZA_GARCIA_N_L",
        label: "San Pedro Garza García, N. L.",
        elevationM: 627,
        wind: {
          T10: 125.18,
          T50: 145.9,
          T200: 162.94,
          "MRI 700": 178.276823289098,
        },
      },
      {
        cityCode: "SAN_QUINTIN_B_C",
        label: "San Quintín, B. C.",
        elevationM: 35,
        wind: { T10: 71.2, T50: 85, T200: 98.4, "MRI 700": 110.46064742217803 },
      },
      {
        cityCode: "SANTA_CECILIA_COAH",
        label: "Santa Cecilia, Coah.",
        elevationM: 1000,
        wind: {
          T10: 110.8,
          T50: 126.3,
          T200: 139.1,
          "MRI 700": 150.62061843312526,
        },
      },
      {
        cityCode: "SANTA_ROSALIA_BC",
        label: "Santa Rosalía, B.C.",
        elevationM: 20,
        wind: { T10: 115, T50: 142, T200: 167.3, "MRI 700": 190.0712223717242 },
      },
      {
        cityCode: "SOLEDAD_DE_GRACIANO_SANCHEZ_S_L_P",
        label: "Soledad de Graciano Sánchez, S. L. P.",
        elevationM: 1860,
        wind: {
          T10: 127.58,
          T50: 148.91,
          T200: 167.68,
          "MRI 700": 184.5739068742001,
        },
      },
      {
        cityCode: "SOMBRERETE_ZAC",
        label: "Sombrerete, Zac.",
        elevationM: 2320,
        wind: {
          T10: 120,
          T50: 134.7,
          T200: 146.7,
          "MRI 700": 157.50057978105494,
        },
      },
      {
        cityCode: "SOTO_LA_MARINA_TAMPS",
        label: "Soto la Marina, Tamps.",
        elevationM: 25,
        wind: {
          T10: 109.7,
          T50: 133.6,
          T200: 165.3,
          "MRI 700": 193.83153158828682,
        },
      },
      {
        cityCode: "TAMPICO_TAMPS",
        label: "Tampico, Tamps.",
        elevationM: 12,
        wind: {
          T10: 128.8,
          T50: 154.9,
          T200: 181.9,
          "MRI 700": 206.2013045073736,
        },
      },
      {
        cityCode: "TAMUIN_S_L_P",
        label: "Tamuín, S. L. P.",
        elevationM: 140,
        wind: {
          T10: 110,
          T50: 126.5,
          T200: 140,
          "MRI 700": 152.15065225368681,
        },
      },
      {
        cityCode: "TANTAKIN_YUC",
        label: "Tantakín, Yuc.",
        elevationM: 12,
        wind: {
          T10: 94.8,
          T50: 123.7,
          T200: 150.8,
          "MRI 700": 175.19130933888243,
        },
      },
      {
        cityCode: "TAPACHULA_CHIS",
        label: "Tapachula, Chis.",
        elevationM: 182,
        wind: {
          T10: 86.2,
          T50: 101.5,
          T200: 113.9,
          "MRI 700": 125.06059910709011,
        },
      },
      {
        cityCode: "TEHUACAN_PUE",
        label: "Tehuacán, Pue.",
        elevationM: 1600,
        wind: {
          T10: 118.42,
          T50: 138.3,
          T200: 157.68,
          "MRI 700": 175.12293634640372,
        },
      },
      {
        cityCode: "TEMOSACHIC_CHIH",
        label: "Temósachic, Chih.",
        elevationM: 1977,
        wind: {
          T10: 100.5,
          T50: 114.8,
          T200: 126.5,
          "MRI 700": 137.03056528652857,
        },
      },
      {
        cityCode: "TEPEHUANES_DGO",
        label: "Tepehuanes, Dgo.",
        elevationM: 1960,
        wind: {
          T10: 133.5,
          T50: 152.1,
          T200: 167.1,
          "MRI 700": 180.60072472631867,
        },
      },
      {
        cityCode: "TEPEXPAN_EDO_MEX",
        label: "Tepexpan, Edo. Méx",
        elevationM: 2250,
        wind: {
          T10: 89.97,
          T50: 104.04,
          T200: 115.52,
          "MRI 700": 125.85255465720921,
        },
      },
      {
        cityCode: "TEPIC_NAY",
        label: "Tepic, Nay.",
        elevationM: 915,
        wind: {
          T10: 112.5,
          T50: 132.5,
          T200: 148.8,
          "MRI 700": 163.47078753593297,
        },
      },
      {
        cityCode: "TEXCOCO_DE_MORA_EDO_MEX",
        label: "Texcoco de Mora, Edo. Méx.",
        elevationM: 2247,
        wind: {
          T10: 89.42,
          T50: 103.64,
          T200: 115.29,
          "MRI 700": 125.77556287077418,
        },
      },
      {
        cityCode: "TIJUANA_B_C",
        label: "Tijuana, B. C.",
        elevationM: 30,
        wind: {
          T10: 94.41,
          T50: 108.33,
          T200: 119.36,
          "MRI 700": 129.28753291541966,
        },
      },
      {
        cityCode: "TLALNEPANTLA_EDO_MEX",
        label: "Tlalnepantla, Edo. Méx.",
        elevationM: 2238,
        wind: {
          T10: 92.62,
          T50: 106.8,
          T200: 118.64,
          "MRI 700": 129.29657205064086,
        },
      },
      {
        cityCode: "TLAQUEPAQUE_JAL",
        label: "Tlaquepaque, Jal.",
        elevationM: 1570,
        wind: {
          T10: 97.1,
          T50: 112.59,
          T200: 124.16,
          "MRI 700": 134.57355900556712,
        },
      },
      {
        cityCode: "TLAXCALA_TLAX",
        label: "Tlaxcala, Tlax.",
        elevationM: 2252,
        wind: {
          T10: 74.1,
          T50: 86.1,
          T200: 95.9,
          "MRI 700": 104.72047348786154,
        },
      },
      {
        cityCode: "TOLUCA_EDO_MEX",
        label: "Toluca, Edo. Méx.",
        elevationM: 2680,
        wind: {
          T10: 84.1,
          T50: 96.1,
          T200: 105.8,
          "MRI 700": 114.53046865635274,
        },
      },
      {
        cityCode: "TONALA_JAL",
        label: "Tonalá, Jal.",
        elevationM: 1528,
        wind: {
          T10: 98.07,
          T50: 113.64,
          T200: 125.54,
          "MRI 700": 136.25057494954615,
        },
      },
      {
        cityCode: "TORREON_COAH",
        label: "Torreón, Coah.",
        elevationM: 1120,
        wind: {
          T10: 133,
          T50: 156.4,
          T200: 175.1,
          "MRI 700": 191.93090349214393,
        },
      },
      {
        cityCode: "TULANCINGO_HGO",
        label: "Tulancingo, Hgo.",
        elevationM: 2180,
        wind: {
          T10: 95.5,
          T50: 108.9,
          T200: 119.8,
          "MRI 700": 129.6105266344582,
        },
      },
      {
        cityCode: "TUXPAN_VER",
        label: "Tuxpan, Ver.",
        elevationM: 14,
        wind: {
          T10: 96.9,
          T50: 129.5,
          T200: 163.5,
          "MRI 700": 194.101642712989,
        },
      },
      {
        cityCode: "TUXTLA_GUTIERREZ_CHIS",
        label: "Tuxtla Gutiérrez, Chis.",
        elevationM: 528,
        wind: {
          T10: 111.4,
          T50: 127.5,
          T200: 140.3,
          "MRI 700": 151.82061843312528,
        },
      },
      {
        cityCode: "URUAPAN_MICH",
        label: "Uruapan, Mich.",
        elevationM: 1620,
        wind: {
          T10: 95.24,
          T50: 111.14,
          T200: 125.49,
          "MRI 700": 138.40569332151154,
        },
      },
      {
        cityCode: "VALLADOLID_YUC",
        label: "Valladolid, Yuc.",
        elevationM: 8,
        wind: {
          T10: 107.8,
          T50: 153.6,
          T200: 189.3,
          "MRI 700": 221.43172484863845,
        },
      },
      {
        cityCode: "VERACRUZ_VER",
        label: "Veracruz, Ver.",
        elevationM: 16,
        wind: {
          T10: 161.2,
          T50: 180,
          T200: 193.8,
          "MRI 700": 206.2206667482132,
        },
      },
      {
        cityCode: "VILLA_AHUMADA_CHIH",
        label: "Villa Ahumada, Chih.",
        elevationM: 1240,
        wind: {
          T10: 131.4,
          T50: 148.1,
          T200: 161.7,
          "MRI 700": 173.9406570851956,
        },
      },
      {
        cityCode: "VILLA_NICOLAS_ROMERO_EDO_MEX",
        label: "Villa Nicolás Romero, Edo. Méx.",
        elevationM: 2390,
        wind: {
          T10: 93.01,
          T50: 107.07,
          T200: 118.24,
          "MRI 700": 128.29353967953196,
        },
      },
      {
        cityCode: "VILLAHERMOSA_TAB",
        label: "Villahermosa, Tab.",
        elevationM: 10,
        wind: {
          T10: 112.4,
          T50: 130.8,
          T200: 145.5,
          "MRI 700": 158.73071023179227,
        },
      },
      {
        cityCode: "XALAPA_VER",
        label: "Xalapa, Ver.",
        elevationM: 1417,
        wind: {
          T10: 112,
          T50: 131.3,
          T200: 146.6,
          "MRI 700": 160.37073922084502,
        },
      },
      {
        cityCode: "XICO_EDO_MEX",
        label: "Xico, Edo. Méx.",
        elevationM: 1297,
        wind: {
          T10: 91.44,
          T50: 105.87,
          T200: 118.22,
          "MRI 700": 129.3355966913357,
        },
      },
      {
        cityCode: "YECORA_SON",
        label: "Yécora, Son.",
        elevationM: 1560,
        wind: {
          T10: 97.6,
          T50: 110.5,
          T200: 121.2,
          "MRI 700": 130.83051697144066,
        },
      },
      {
        cityCode: "ZACATECAS_ZAC",
        label: "Zacatecas, Zac.",
        elevationM: 2612,
        wind: {
          T10: 119.8,
          T50: 139.1,
          T200: 154.7,
          "MRI 700": 168.7407537153714,
        },
      },
      {
        cityCode: "ZAMORA_MICH",
        label: "Zamora, Mich.",
        elevationM: 1560,
        wind: {
          T10: 98.4,
          T50: 115.1,
          T200: 128.8,
          "MRI 700": 141.1306619167044,
        },
      },
      {
        cityCode: "ZAPOPAN_JAL",
        label: "Zapopan Jal.",
        elevationM: 1571,
        wind: {
          T10: 96.86,
          T50: 112.35,
          T200: 123.36,
          "MRI 700": 133.26953194911792,
        },
      },
    ],
  },
  {
    countryCode: "CO",
    label: "Colombia",
    cities: [
      {
        cityCode: "PUERTO_MURILLO_TOLIMA_MURILLO",
        label: "Puerto Murillo / Tolima / Murillo",
        elevationM: 2950,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "TUNJA_BOYACA_TUNJA",
        label: "Tunja / Boyacá / Tunja",
        elevationM: 2820,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "TOCA_BOYACA_TOCA",
        label: "Toca / Boyacá / Toca",
        elevationM: 2810,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "TUTA_BOYACA_TUTA",
        label: "Tuta / Boyacá / Tuta",
        elevationM: 2700,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "VILLAPINZON_CUNDINAMARCA_VILLAPINZON",
        label: "Villapinzón / Cundinamarca / Villapinzón",
        elevationM: 2700,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "SAMACA_BOYACA_SAMACA",
        label: "Samacá / Boyacá / Samacá",
        elevationM: 2600,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "TOCANCIPA_CUNDINAMARCA_TOCANCIPA",
        label: "Tocancipá / Cundinamarca / Tocancipá",
        elevationM: 2600,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "IZA_BOYACA_IZA",
        label: "Iza / Boyacá / Iza",
        elevationM: 2560,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "SOGAMOSO_BOYACA_SOGAMOSO",
        label: "Sogamoso / Boyacá / Sogamoso",
        elevationM: 2560,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "BELEN_BOYACA_BELEN",
        label: "Belén / Boyacá / Belén",
        elevationM: 2550,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "DUITAMA_BOYACA_DUITAMA",
        label: "Duitama / Boyacá / Duitama",
        elevationM: 2530,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "PAIPA_BOYACA_PAIPA",
        label: "Paipa / Boyacá / Paipa",
        elevationM: 2525,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "NOBSA_BOYACA_NOBSA",
        label: "Nobsa / Boyacá / Nobsa",
        elevationM: 2475,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "BOYACA_BOYACA_BOYACA",
        label: "Boyacá / Boyacá / Boyacá",
        elevationM: 2400,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "RIONEGRO_ANTIOQUIA_RIONEGRO",
        label: "Rionegro / Antioquia / Rionegro",
        elevationM: 2130,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "SACHICA_BOYACA_SACHICA",
        label: "Sáchica / Boyacá / Sáchica",
        elevationM: 2100,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "JUNIN_NARINO_JUNIN",
        label: "Junín / Nariño / Junín",
        elevationM: 1700,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "ABREGO_NORTE_DE_SANTANDER_ABREGO",
        label: "Abrego  / Norte de Santander  / Ábrego",
        elevationM: 1390,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "CONVENCION_NORTE_DE_SANTANDER_CONVENCION",
        label: "Convención / Norte de Santander / Convención",
        elevationM: 1250,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "GRAMALOTE_NORTE_DE_SANTANDER_GRAMALOTE",
        label: "Gramalote / Norte de Santander / Gramalote",
        elevationM: 1250,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "OCANA_NORTE_DE_SANTANDER_OCANA",
        label: "Ocaña / Norte de Santander / Ocaña",
        elevationM: 1200,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "SALAZAR_NORTE_DE_SANTANDER_SALAZAR_DE_LAS_PALMAS",
        label: "Salazar / Norte de Santander / Salazar de Las Palmas",
        elevationM: 980,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "SARDINATA_NORTE_DE_SANTANDER_SARDINATA",
        label: "Sardinata / Norte de Santander / Sardinata",
        elevationM: 980,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "BUCARAMANGA_SANTANDER_BUCARAMANGA",
        label: "Bucaramanga / Santander / Bucaramanga",
        elevationM: 959,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "FLORIDABLANCA_SANTANDER_FLORIDABLANCA",
        label: "Floridablanca / Santander / Floridablanca",
        elevationM: 925,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "BELEN_DE_DOCAMPADO_HUILA_BARAYA",
        label: "Belén de Docampado / Huila / Baraya",
        elevationM: 900,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "EL_PLAYON_SANTANDER_EL_PLAYON",
        label: "El Playón / Santander / El Playón",
        elevationM: 900,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "LOS_PATIOS_NORTE_DE_SANTANDER_LOS_PATIOS",
        label: "Los Patios / Norte de Santander / Los Patios",
        elevationM: 420,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "CUCUTA_NORTE_DE_SANTANDER_CUCUTA",
        label: "Cúcuta / Norte de Santander / Cúcuta",
        elevationM: 320,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "IJUA_CAQUETA_CARTAGENA_DEL_CHAIRA",
        label: "Ijuá / Caquetá / Cartagena del Chairá",
        elevationM: 250,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "EL_TARRA_NORTE_DE_SANTANDER_EL_TARRA",
        label: "El Tarra / Norte de Santander / El Tarra",
        elevationM: 230,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "CERRO_NAPI_NARINO_BARBACOAS",
        label: "Cerro Napi / Nariño / Barbacoas",
        elevationM: 200,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "LA_JAGUA_DE_IBIRICO_CESAR_LA_JAGUA_DE_IBIRICO",
        label: "La Jagua de Ibirico / Cesar / La Jagua de Ibirico",
        elevationM: 200,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "SAN_CIPRIANO_VALLE_DEL_CAUCA_BUENAVENTURA",
        label: "San Cipriano / Valle del Cauca / Buenaventura",
        elevationM: 200,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "EL_CRUCE_CESAR_PAILITAS",
        label: "El Cruce / Cesar / Pailitas",
        elevationM: 180,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "AGUSTIN_CODAZZI_CESAR_AGUSTIN_CODAZZI",
        label: "Agustín Codazzi / Cesar / Agustín Codazzi",
        elevationM: 170,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "CASACARA_CESAR_AGUSTIN_CODAZZI",
        label: "Casacara / Cesar / Agustín Codazzi",
        elevationM: 160,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "AGUACHICA_CESAR_AGUACHICA",
        label: "Aguachica / Cesar / Aguachica",
        elevationM: 145,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "PAILITAS_CESAR_PAILITAS",
        label: "Pailitas / Cesar / Pailitas",
        elevationM: 145,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "PELAYA_CESAR_PELAYA",
        label: "Pelaya / Cesar / Pelaya",
        elevationM: 140,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "SABANA_DE_TORRES_SANTANDER_SABANA_DE_TORRES",
        label: "Sabana de Torres / Santander / Sabana de Torres",
        elevationM: 135,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "DIVISO_NARINO_BARBACOAS",
        label: "Diviso / Nariño / Barbacoas",
        elevationM: 120,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "ISLA_GORGONA_CAUCA_GUAPI",
        label: "Isla Gorgona / Cauca / Guapi",
        elevationM: 120,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "SAN_ALBERTO_CESAR_SAN_ALBERTO",
        label: "San Alberto / Cesar / San Alberto",
        elevationM: 120,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "LA_PALMITA_CESAR_AGUACHICA",
        label: "La Palmita / Cesar / Aguachica",
        elevationM: 110,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "BARBACOAS_NARINO_BARBACOAS",
        label: "Barbacoas / Nariño / Barbacoas",
        elevationM: 100,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "CAUCA_CAUCA_CAUCA",
        label: "Cauca / Cauca / Cauca",
        elevationM: 100,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "CERRO_TORRA_CHOCO_ALTO_BAUDO",
        label: "Cerro Torra / Chocó / Alto Baudó",
        elevationM: 100,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "MAGUI_PAYAN_NARINO_MAGUI_PAYAN",
        label: "Magüí Payán / Nariño / Magüí Payán",
        elevationM: 100,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "LA_MATA_CESAR_LA_MATA",
        label: "La Mata / Cesar / La Mata",
        elevationM: 90,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "TIBU_NORTE_DE_SANTANDER_TIBU",
        label: "Tibú / Norte de Santander / Tibú",
        elevationM: 80,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "LA_GABARRA_NORTE_DE_SANTANDER_TIBU_CORREGIMIENTO",
        label: "La Gabarra / Norte de Santander / Tibú (corregimiento)",
        elevationM: 75,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "PUENTE_SOGAMOSO_SANTANDER_BARRANCABERMEJA",
        label: "Puente Sogamoso / Santander / Barrancabermeja",
        elevationM: 75,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "ISTMINA_CHOCO_ISTMINA",
        label: "Istmina / Chocó / Istmina",
        elevationM: 65,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "TADO_CHOCO_TADO",
        label: "Tadó / Chocó / Tadó",
        elevationM: 65,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "CAMPO_DOS_NORTE_DE_SANTANDER_TIBU",
        label: "Campo Dos / Norte de Santander / Tibú",
        elevationM: 60,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "CONDOTO_CHOCO_CONDOTO",
        label: "Condoto / Chocó / Condoto",
        elevationM: 60,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "NOVITA_CHOCO_NOVITA",
        label: "Nóvita / Chocó / Nóvita",
        elevationM: 60,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "SIPI_CHOCO_SIPI",
        label: "Sipí / Chocó / Sipí",
        elevationM: 60,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "PUERTO_SANTANDER_NORTE_DE_SANTANDER_PUERTO_SANTANDER",
        label: "Puerto Santander / Norte de Santander / Puerto Santander",
        elevationM: 55,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "CERTEGUI_CHOCO_CERTEGUI",
        label: "Cértegui / Chocó / Cértegui",
        elevationM: 50,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "CHIMBUSA_NARINO_BARBACOAS",
        label: "Chimbusa / Nariño / Barbacoas",
        elevationM: 50,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "EL_PAN_NARINO_BARBACOAS",
        label: "El Pan / Nariño / Barbacoas",
        elevationM: 50,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "MULATOS_NARINO_BARBACOAS",
        label: "Mulatos / Nariño / Barbacoas",
        elevationM: 50,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "NAYA_CAUCA_LOPEZ_DE_MICAY",
        label: "Naya / Cauca / López de Micay",
        elevationM: 50,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "SAN_JUAN_DE_LA_COSTA_NARINO_SAN_JUAN_DE_LA_COSTA",
        label: "San Juan de la Costa / Nariño / San Juan de la Costa",
        elevationM: 50,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "CHOCO_CHOCO_QUIBDO",
        label: "Chocó / Chocó / Quibdó",
        elevationM: 43,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "BOROJO_CHOCO_LLORO",
        label: "Borojo / Chocó / Lloró",
        elevationM: 40,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "PIE_DE_PATO_CHOCO_ALTO_BAUDO",
        label: "Pie de Pato / Chocó / Alto Baudó",
        elevationM: 40,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "QUIBDO_CHOCO_QUIBDO",
        label: "Quibdó / Chocó / Quibdó",
        elevationM: 40,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "TAGACHI_CHOCO_BAGADO",
        label: "Tagachí / Chocó / Bagadó",
        elevationM: 40,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "OPOGODO_CHOCO_CERTEGUI",
        label: "Opogodó / Chocó / Cértegui",
        elevationM: 35,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "BOCAS_DE_SAN_JUAN_CHOCO_ISTMINA",
        label: "Bocas de San Juan / Chocó / Istmina",
        elevationM: 30,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "EL_HORMIGUERO_VALLE_DEL_CAUCA_CALI",
        label: "El Hormiguero / Valle del Cauca / Cali",
        elevationM: 30,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "LLANO_RICO_CHOCO_ACANDI",
        label: "Llano Rico / Chocó / Acandí",
        elevationM: 30,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "LLORO_CHOCO_LLORO",
        label: "Lloró / Chocó / Lloró",
        elevationM: 30,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "PARQUE_NACIONAL_NATURAL_LOS_KATIOS_CHOCO_UNGUIA",
        label: "Parque Nacional Natural Los Katíos / Chocó / Unguía",
        elevationM: 30,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "TIMBIQUI_CAUCA_TIMBIQUI",
        label: "Timbiquí / Cauca / Timbiquí",
        elevationM: 30,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "CURBARADO_CHOCO_RIOSUCIO",
        label: "Curbaradó / Chocó / Riosucio",
        elevationM: 25,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "RIOSUCIO_CHOCO_RIOSUCIO",
        label: "Riosucio / Chocó / Riosucio",
        elevationM: 25,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "BOJAYA_CHOCO_BOJAYA",
        label: "Bojayá / Chocó / Bojayá",
        elevationM: 20,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "CANDELILLAS_NARINO_FRANCISCO_PIZARRO",
        label: "Candelillas / Nariño / Francisco Pizarro",
        elevationM: 20,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "CHAGUI_NARINO_LA_TOLA",
        label: "Chagüí / Nariño / La Tola",
        elevationM: 20,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "GENOVEVA_DE_DOCORDO_CHOCO_SIPI_MEDIO_BAUDO",
        label: "Genoveva de Docordó / Chocó / Sipí / Medio Baudó",
        elevationM: 20,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "GUAPI_CAUCA_GUAPI",
        label: "Guapi / Cauca / Guapi",
        elevationM: 20,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "IGUANA_CHOCO_NUQUI",
        label: "Iguana / Chocó / Nuquí",
        elevationM: 20,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "LA_BOBA_CHOCO_MEDIO_ATRATO",
        label: "La Boba / Chocó / Medio Atrato",
        elevationM: 20,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "MICAY_CAUCA_LOPEZ_DE_MICAY",
        label: "Micay / Cauca / López de Micay",
        elevationM: 20,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "MUTIS_CHOCO_BAHIA_SOLANO",
        label: "Mutis / Chocó / Bahía Solano",
        elevationM: 20,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "NUMACO_NARINO_MAGUI_PAYAN",
        label: "Numaco / Nariño / Magüí Payán",
        elevationM: 20,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "SALAQUI_CHOCO_RIOSUCIO",
        label: "Salaquí / Chocó / Riosucio",
        elevationM: 20,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "SATINGA_NARINO_OLAYA_HERRERA",
        label: "Satinga / Nariño / Olaya Herrera",
        elevationM: 20,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "UNGUIA_CHOCO_UNGUIA",
        label: "Unguía / Chocó / Unguía",
        elevationM: 20,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "VIGIA_DEL_FUERTE_ANTIOQUIA_VIGIA_DEL_FUERTE",
        label: "Vigía del Fuerte / Antioquia / Vigía del Fuerte",
        elevationM: 20,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "ANTADO_CHOCO_JURADO",
        label: "Antado / Chocó / Juradó",
        elevationM: 15,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "CHACHAJO_CHOCO_BOJAYA",
        label: "Chachajó / Chocó / Bojayá",
        elevationM: 15,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "CHILVI_NARINO_TUMACO",
        label: "Chilvi / Nariño / Tumaco",
        elevationM: 15,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "LLORENTE_NARINO_TUMACO",
        label: "Llorente / Nariño / Tumaco",
        elevationM: 15,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "NABUGA_CHOCO_MEDIO_BAUDO",
        label: "Nabugá / Chocó / Medio Baudó",
        elevationM: 15,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "VIRINVI_CHOCO_RIOSUCIO_CORREGIMIENTO",
        label: "Virinví / Chocó / Riosucio (corregimiento)",
        elevationM: 15,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "ARDITA_CHOCO_ACANDI",
        label: "Ardita / Chocó / Acandí",
        elevationM: 10,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "ARUSI_CHOCO_NUQUI",
        label: "Arusí / Chocó / Nuquí",
        elevationM: 10,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "BUENAVENTURA_VALLE_DEL_CAUCA_BUENAVENTURA",
        label: "Buenaventura / Valle del Cauca / Buenaventura",
        elevationM: 10,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "COQUI_CHOCO_NUQUI",
        label: "Coquí / Chocó / Nuquí",
        elevationM: 10,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "EL_CHARCO_NARINO_EL_CHARCO",
        label: "El Charco / Nariño / El Charco",
        elevationM: 10,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "EL_VALLE_CHOCO_BAHIA_SOLANO",
        label: "El Valle / Chocó / Bahía Solano",
        elevationM: 10,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "FRANCISCO_PIZARRO_NARINO_FRANCISCO_PIZARRO",
        label: "Francisco Pizarro / Nariño / Francisco Pizarro",
        elevationM: 10,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "ISLA_DEL_MONO_CHOCO_BAHIA_SOLANO",
        label: "Isla del Mono / Chocó / Bahía Solano",
        elevationM: 10,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "JURADO_CHOCO_JURADO",
        label: "Jurado / Chocó / Juradó",
        elevationM: 10,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "MECANA_CHOCO_NUQUI",
        label: "Mecana / Chocó / Nuquí",
        elevationM: 10,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "MOSQUERA_NARINO_MOSQUERA",
        label: "Mosquera / Nariño / Mosquera",
        elevationM: 10,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "OAPURGANA_CHOCO_ACANDI",
        label: "Oapurgana / Chocó / Acandí",
        elevationM: 10,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "PIZARRO_CHOCO_BAJO_BAUDO",
        label: "Pizarro / Chocó / Bajo Baudó",
        elevationM: 10,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "SIVIRU_CHOCO_NUQUI",
        label: "Sivirú / Chocó / Nuquí",
        elevationM: 10,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "TRIBUGA_CHOCO_NUQUI",
        label: "Tribugá / Chocó / Nuquí",
        elevationM: 10,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "TUMACO_NARINO_SAN_ANDRES_DE_TUMACO",
        label: "Tumaco / Nariño / San Andrés de Tumaco",
        elevationM: 10,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "ACANDI_CHOCO_ACANDI",
        label: "Acandí / Chocó / Acandí",
        elevationM: 5,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "CUPICA_CHOCO_BAHIA_SOLANO",
        label: "Cupica / Chocó / Bahía Solano",
        elevationM: 5,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "JUANCHACO_VALLE_DEL_CAUCA_BUENAVENTURA",
        label: "Juanchaco / Valle del Cauca / Buenaventura",
        elevationM: 5,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "JURUBIDA_CHOCO_NUQUI",
        label: "Jurubidá / Chocó / Nuquí",
        elevationM: 5,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "NUQUI_CHOCO_NUQUI",
        label: "Nuquí / Chocó / Nuquí",
        elevationM: 5,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "PARQUE_NACIONAL_NATURAL_UTRIA_CHOCO_BAHIA_SOLANO",
        label: "Parque Nacional Natural Utría / Chocó / Bahía Solano",
        elevationM: 5,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "PUERTO_ANTIOQUIA_ANTIOQUIA_TURBO",
        label: "Puerto Antioquía / Antioquia / Turbo",
        elevationM: 5,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "PUNTA_ARDITA_CHOCO_ACANDI",
        label: "Punta Ardita / Chocó / Acandí",
        elevationM: 5,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "PUNTA_PINA_CHOCO_UNGUIA",
        label: "Punta Piña / Chocó / Unguía",
        elevationM: 5,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "TAPARALITO_CHOCO_BAJO_BAUDO",
        label: "Taparalito / Chocó / Bajo Baudó",
        elevationM: 5,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "TARIDO_CHOCO_MEDIO_ATRATO",
        label: "Taridó / Chocó / Medio Atrato",
        elevationM: 5,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "TOGOROMA_CHOCO_MEDIO_ATRATO",
        label: "Togoromá / Chocó / Medio Atrato",
        elevationM: 5,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "VIRADO_CHOCO_VIGIA_DEL_FUERTE",
        label: "Viradó / Chocó / Vigía del Fuerte",
        elevationM: 5,
        wind: {
          "B.2.4": 75,
          "B.2.3": 60,
        },
      },
      {
        cityCode: "PARQUE_NACIONAL_NATURAL_LAS_HERMOSAS_TOLIMA_CHAPARRAL",
        label: "Parque Nacional Natural Las Hermosas / Tolima / Chaparral",
        elevationM: 3000,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "EL_CODITO_CUNDINAMARCA_BOGOTA",
        label: "El Codito / Cundinamarca / Bogotá",
        elevationM: 2700,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "SIBATE_CUNDINAMARCA_SIBATE",
        label: "Sibaté / Cundinamarca / Sibaté",
        elevationM: 2700,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "BOGOTA_CUNDINAMARCA_BOGOTA",
        label: "Bogotá / Cundinamarca / Bogotá",
        elevationM: 2600,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "SOACHA_CUNDINAMARCA_SOACHA",
        label: "Soacha / Cundinamarca / Soacha",
        elevationM: 2600,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "CAJICA_CUNDINAMARCA_CAJICA",
        label: "Cajicá / Cundinamarca / Cajicá",
        elevationM: 2550,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "SONSON_ANTIOQUIA_SONSON",
        label: "Sonsón / Antioquia / Sonsón",
        elevationM: 2475,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "MANIZALES_CALDAS_MANIZALES",
        label: "Manizales / Caldas / Manizales",
        elevationM: 2150,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "NARINO_NARINO_NARINO",
        label: "Nariño / Nariño / Nariño",
        elevationM: 2100,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "PENSILVANIA_CALDAS_PENSILVANIA",
        label: "Pensilvania / Caldas / Pensilvania",
        elevationM: 2050,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "GUATAPE_ANTIOQUIA_GUATAPE",
        label: "Guatapé / Antioquia / Guatapé",
        elevationM: 1900,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "MARQUETALIA_CALDAS_MARQUETALIA",
        label: "Marquetalia / Caldas / Marquetalia",
        elevationM: 1850,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "TULUNI_TOLIMA_PLANADAS",
        label: "Tuluní / Tolima / Planadas",
        elevationM: 1800,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "SALAMINA_CALDAS_SALAMINA",
        label: "Salamina / Caldas / Salamina",
        elevationM: 1775,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "SILVANIA_CUNDINAMARCA_SILVANIA",
        label: "Silvania / Cundinamarca / Silvania",
        elevationM: 1730,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "FUSAGASUGA_CUNDINAMARCA_FUSAGASUGA",
        label: "Fusagasugá / Cundinamarca / Fusagasugá",
        elevationM: 1720,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "SANTA_ROSA_DE_CABAL_RISARALDA_SANTA_ROSA_DE_CABAL",
        label: "Santa Rosa de Cabal / Risaralda / Santa Rosa de Cabal",
        elevationM: 1715,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "CACHIPAY_CUNDINAMARCA_CACHIPAY",
        label: "Cachipay / Cundinamarca / Cachipay",
        elevationM: 1600,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "LIBANO_TOLIMA_LIBANO",
        label: "Líbano / Tolima / Líbano",
        elevationM: 1560,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "MARSELLA_RISARALDA_MARSELLA",
        label: "Marsella / Risaralda / Marsella",
        elevationM: 1550,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "RIOBLANCO_TOLIMA_RIOBLANCO",
        label: "Rioblanco / Tolima / Rioblanco",
        elevationM: 1500,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "FRESNO_TOLIMA_FRESNO",
        label: "Fresno / Tolima / Fresno",
        elevationM: 1450,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "YALI_ANTIOQUIA_YALI",
        label: "Yalí / Antioquia / Yalí",
        elevationM: 1450,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "PEREIRA_RISARALDA_PEREIRA",
        label: "Pereira / Risaralda / Pereira",
        elevationM: 1410,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "CHINCHINA_CALDAS_CHINCHINA",
        label: "Chinchiná / Caldas / Chinchiná",
        elevationM: 1360,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "IBAGUE_TOLIMA_IBAGUE",
        label: "Ibagué / Tolima / Ibagué",
        elevationM: 1285,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "CARACOLI_ANTIOQUIA_CARACOLI",
        label: "Caracolí / Antioquia / Caracolí",
        elevationM: 1270,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "LA_VEGA_CUNDINAMARCA_LA_VEGA",
        label: "La Vega / Cundinamarca / La Vega",
        elevationM: 1250,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "GUADUAS_CUNDINAMARCA_GUADUAS",
        label: "Guaduas / Cundinamarca / Guaduas",
        elevationM: 1000,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "VEGACHI_ANTIOQUIA_VEGACHI",
        label: "Vegachí / Antioquia / Vegachí",
        elevationM: 950,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "MACEO_ANTIOQUIA_MACEO",
        label: "Maceo / Antioquia / Maceo",
        elevationM: 900,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "VDA_LA_OSCURANA_ANTIOQUIA_VALDIVIA_VEREDA",
        label: "Vda. La Oscurana / Antioquia / Valdivia (vereda)",
        elevationM: 900,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "CHAPARRAL_TOLIMA_CHAPARRAL",
        label: "Chaparral / Tolima / Chaparral",
        elevationM: 860,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "VILLETA_CUNDINAMARCA_VILLETA",
        label: "Villeta / Cundinamarca / Villeta",
        elevationM: 850,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "NORCASIA_CALDAS_NORCASIA",
        label: "Norcasia / Caldas / Norcasia",
        elevationM: 700,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "REMEDIOS_ANTIOQUIA_REMEDIOS",
        label: "Remedios / Antioquia / Remedios",
        elevationM: 700,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "SEGOVIA_ANTIOQUIA_SEGOVIA",
        label: "Segovia / Antioquia / Segovia",
        elevationM: 650,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "ALPUJARRA_TOLIMA_ALPUJARRA",
        label: "Alpujarra / Tolima / Alpujarra",
        elevationM: 450,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "ATACO_TOLIMA_ATACO",
        label: "Ataco / Tolima / Ataco",
        elevationM: 450,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "ORTEGA_TOLIMA_ORTEGA",
        label: "Ortega / Tolima / Ortega",
        elevationM: 450,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "NATAGAIMA_TOLIMA_NATAGAIMA",
        label: "Natagaima / Tolima / Natagaima",
        elevationM: 350,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "MELGAR_TOLIMA_MELGAR",
        label: "Melgar / Tolima / Melgar",
        elevationM: 330,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "HONDA_TOLIMA_HONDA",
        label: "Honda / Tolima / Honda",
        elevationM: 229,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "SINCELEJO_SUCRE_SINCELEJO",
        label: "Sincelejo / Sucre / Sincelejo",
        elevationM: 215,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "LA_DORADA_CALDAS_LA_DORADA",
        label: "La Dorada / Caldas / La Dorada",
        elevationM: 176,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "PUERTO_TRIUNFO_ANTIOQUIA_PUERTO_TRIUNFO",
        label: "Puerto Triunfo / Antioquia / Puerto Triunfo",
        elevationM: 175,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "ALBANIA_LA_GUAJIRA_ALBANIA",
        label: "Albania / La Guajira / Albania",
        elevationM: 150,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "PUERTO_ARAUJO_SANTANDER_CIMITARRA",
        label: "Puerto Araujo / Santander / Cimitarra",
        elevationM: 150,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "PUERTO_BOYACA_BOYACA_PUERTO_BOYACA",
        label: "Puerto Boyacá / Boyacá / Puerto Boyacá",
        elevationM: 150,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "PUERTO_NARE_ANTIOQUIA_PUERTO_NARE",
        label: "Puerto Nare / Antioquia / Puerto Nare",
        elevationM: 150,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "PUERTO_BERRIO_ANTIOQUIA_PUERTO_BERRIO",
        label: "Puerto Berrío / Antioquia / Puerto Berrío",
        elevationM: 125,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "ANTIOQUIA_VEREDA_ANTIOQUIA_ZONA_RURAL_ANTIOQUIA_NORTE",
        label: "Antioquía (vereda) / Antioquia / Zona rural Antioquia norte",
        elevationM: 120,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "MAJAYURA_LA_GUAJIRA_MAICAO",
        label: "Majayura / La Guajira / Maicao",
        elevationM: 100,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "SAN_ANDRES_DE_SOTAVENTO_CORDOBA_SAN_ANDRES_DE_SOTAVENTO",
        label: "San Andrés de Sotavento / Córdoba / San Andrés de Sotavento",
        elevationM: 95,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "TUCHIN_CORDOBA_TUCHIN",
        label: "Tuchín / Córdoba / Tuchín",
        elevationM: 95,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "CHINU_CORDOBA_CHINU",
        label: "Chinú / Córdoba / Chinú",
        elevationM: 90,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "SAHAGUN_CORDOBA_SAHAGUN",
        label: "Sahagún / Córdoba / Sahagún",
        elevationM: 90,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "VALENCIA_CORDOBA_VALENCIA",
        label: "Valencia / Córdoba / Valencia",
        elevationM: 80,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "CANALETE_CORDOBA_CANALETE",
        label: "Canalete / Córdoba / Canalete",
        elevationM: 70,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "SAN_CARLOS_CORDOBA_SAN_CARLOS",
        label: "San Carlos / Córdoba / San Carlos",
        elevationM: 70,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "TIERRA_ALTA_CORDOBA_TIERRA_ALTA",
        label: "Tierra Alta / Córdoba / Tierra Alta",
        elevationM: 55,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "MAICAO_LA_GUAJIRA_MAICAO",
        label: "Maicao / La Guajira / Maicao",
        elevationM: 50,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "SAN_JOSE_DE_MULATOS_ANTIOQUIA_TURBO_CORREGIMIENTO",
        label: "San José de Mulatos / Antioquia / Turbo (corregimiento)",
        elevationM: 50,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "SAN_PEDRO_DE_URABA_ANTIOQUIA_SAN_PEDRO_DE_URABA",
        label: "San Pedro de Urabá / Antioquia / San Pedro de Urabá",
        elevationM: 40,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "EL_REPOSO_ANTIOQUIA_APARTADO_CORREGIMIENTO",
        label: "El Reposo / Antioquia / Apartadó (corregimiento)",
        elevationM: 35,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "SAN_JUAN_CORDOBA_SAN_JUAN_DE_URABA_CORDOBA",
        label: "San Juan / Córdoba / San Juan de Urabá / Córdoba",
        elevationM: 35,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "ARBOLETES_ANTIOQUIA_ARBOLETES",
        label: "Arboletes / Antioquia / Arboletes",
        elevationM: 30,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "CHIGORODO_ANTIOQUIA_CHIGORODO",
        label: "Chigorodó / Antioquia / Chigorodó",
        elevationM: 30,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "LOS_GARZONES_CORDOBA_MONTERIA_CORREGIMIENTO",
        label: "Los Garzones / Córdoba / Montería (corregimiento)",
        elevationM: 30,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "APARTADO_ANTIOQUIA_APARTADO",
        label: "Apartadó / Antioquia / Apartadó",
        elevationM: 25,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "CAREPA_ANTIOQUIA_CAREPA",
        label: "Carepa / Antioquia / Carepa",
        elevationM: 25,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "EL_TOTUMO_CORDOBA_ZONA_RURAL_CARIBE",
        label: "El Totumo / Córdoba / Zona rural Caribe",
        elevationM: 25,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "MORINDO_ANTIOQUIA_CAREPA_CORREGIMIENTO",
        label: "Morindó / Antioquia / Carepa (corregimiento)",
        elevationM: 25,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "YOTOJOROIN_LA_GUAJIRA_URIBIA",
        label: "Yotojoroin / La Guajira / Uribia",
        elevationM: 25,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "BLANQUICET_ANTIOQUIA_TURBO_CORREGIMIENTO",
        label: "Blanquicet / Antioquia / Turbo (corregimiento)",
        elevationM: 20,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "COTORRA_CORDOBA_COTORRA",
        label: "Cotorra / Córdoba / Cotorra",
        elevationM: 20,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "CURRULAO_ANTIOQUIA_TURBO_CORREGIMIENTO",
        label: "Currulao / Antioquia / Turbo (corregimiento)",
        elevationM: 20,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "MOMIL_CORDOBA_MOMIL",
        label: "Momil / Córdoba / Momil",
        elevationM: 20,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "SANTA_MARTA_GUAJIRA_LA_GUAJIRA_URIBIA",
        label: "Santa Marta (Guajira) / La Guajira / Uribia",
        elevationM: 20,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "MONTERIA_CORDOBA_MONTERIA",
        label: "Montería / Córdoba / Montería",
        elevationM: 18,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "CERETE_CORDOBA_CERETE",
        label: "Cereté / Córdoba / Cereté",
        elevationM: 15,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "CIENAGA_DE_ORO_CORDOBA_CIENAGA_DE_ORO",
        label: "Ciénaga de Oro / Córdoba / Ciénaga de Oro",
        elevationM: 15,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "EL_MELLITO_ANTIOQUIA_TURBO_CORREGIMIENTO",
        label: "El Mellito / Antioquia / Turbo (corregimiento)",
        elevationM: 15,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "NUEVA_COLONIA_ANTIOQUIA_TURBO_CORREGIMIENTO",
        label: "Nueva Colonia / Antioquia / Turbo (corregimiento)",
        elevationM: 15,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "SAN_PELAYO_CORDOBA_SAN_PELAYO",
        label: "San Pelayo / Córdoba / San Pelayo",
        elevationM: 15,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "LORICA_CORDOBA_LORICA",
        label: "Lorica / Córdoba / Lorica",
        elevationM: 10,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "NECOCLI_ANTIOQUIA_NECOCLI",
        label: "Necoclí / Antioquia / Necoclí",
        elevationM: 10,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "PLAYA_SAN_JUAN_ANTIOQUIA_APARTADO_CORREGIMIENTO",
        label: "Playa San Juan / Antioquia / Apartadó (corregimiento)",
        elevationM: 5,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "PUNTA_DE_PIEDRA_ANTIOQUIA_URABA_COSTERO",
        label: "Punta de Piedra / Antioquia / Urabá costero",
        elevationM: 5,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "SAN_ANTERO_CORDOBA_SAN_ANTERO",
        label: "San Antero / Córdoba / San Antero",
        elevationM: 5,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "TURBO_ANTIOQUIA_TURBO",
        label: "Turbo / Antioquia / Turbo",
        elevationM: 5,
        wind: {
          "B.2.4": 100,
          "B.2.3": 80,
        },
      },
      {
        cityCode: "PARQUE_NACIONAL_NATURAL_COCUY_BOYACA_EL_COCUY",
        label: "Parque Nacional Natural Cocuy / Boyacá / El Cocuy",
        elevationM: 4800,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PARQUE_NACIONAL_NATURAL_NEVADO_CALDAS_MANIZALES",
        label: "Parque Nacional Natural Nevado / Caldas / Manizales",
        elevationM: 4800,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "RITACUBA_BLANCO_BOYACA_GUICAN",
        label: "Ritacuba Blanco / Boyacá / Guicán",
        elevationM: 4800,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CERRO_TATAMA_RISARALDA_SANTUARIO",
        label: "Cerro Tatamá / Risaralda / Santuario",
        elevationM: 4200,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PARAMO_EL_NEVADO_TOLIMA_MURILLO",
        label: "Páramo El Nevado / Tolima / Murillo",
        elevationM: 4100,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PARQUE_NACIONAL_NATURAL_CHINGAZA_CUNDINAMARCA_LA_CALERA",
        label: "Parque Nacional Natural Chingaza / Cundinamarca / La Calera",
        elevationM: 3600,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PARAMO_FRONTINO_ANTIOQUIA_FRONTINO",
        label: "Páramo Frontino / Antioquia / Frontino",
        elevationM: 3500,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PARQUE_NACIONAL_NATURAL_PISBA_BOYACA_PISBA",
        label: "Parque Nacional Natural Pisba / Boyacá / Pisba",
        elevationM: 3300,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "AQUITANIA_BOYACA_AQUITANIA",
        label: "Aquitania / Boyacá / Aquitania",
        elevationM: 3030,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MURILLO_TOLIMA_MURILLO",
        label: "Murillo / Tolima / Murillo",
        elevationM: 2950,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "ZIPAQUIRA_CUNDINAMARCA_ZIPAQUIRA",
        label: "Zipaquirá / Cundinamarca / Zipaquirá",
        elevationM: 2650,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CERINZA_BOYACA_CERINZA",
        label: "Cerinza / Boyacá / Cerinza",
        elevationM: 2600,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PARQUE_NACIONAL_NATURAL_MUNCHIQUE_CAUCA_EL_TAMBO",
        label: "Parque Nacional Natural Munchique / Cauca / El Tambo",
        elevationM: 2600,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SESQUILE_CUNDINAMARCA_SESQUILE",
        label: "Sesquilé / Cundinamarca / Sesquilé",
        elevationM: 2600,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CHOCONTA_CUNDINAMARCA_CHOCONTA",
        label: "Chocontá / Cundinamarca / Chocontá",
        elevationM: 2580,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "FACATATIVA_CUNDINAMARCA_FACATATIVA",
        label: "Facatativá / Cundinamarca / Facatativá",
        elevationM: 2580,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SUESCA_CUNDINAMARCA_SUESCA",
        label: "Suesca / Cundinamarca / Suesca",
        elevationM: 2580,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CHIQUINQUIRA_BOYACA_CHIQUINQUIRA",
        label: "Chiquinquirá / Boyacá / Chiquinquirá",
        elevationM: 2550,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SOCHA_BOYACA_SOCHA",
        label: "Socha / Boyacá / Socha",
        elevationM: 2500,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PAMPLONA_NORTE_DE_SANTANDER_PAMPLONA",
        label: "Pamplona / Norte de Santander / Pamplona",
        elevationM: 2340,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LA_VEGA_CAUCA_LA_VEGA",
        label: "La Vega / Cauca / La Vega",
        elevationM: 2300,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SABANALARGA_ANTIOQUIA_SABANALARGA",
        label: "Sabanalarga / Antioquia / Sabanalarga",
        elevationM: 2300,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "RAQUIRA_BOYACA_RAQUIRA",
        label: "Ráquira / Boyacá / Ráquira",
        elevationM: 2200,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MALAGA_SANTANDER_MALAGA",
        label: "Málaga / Santander / Málaga",
        elevationM: 2150,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SIBUNDOY_PUTUMAYO_SIBUNDOY",
        label: "Sibundoy / Putumayo / Sibundoy",
        elevationM: 2150,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "VILLA_DE_LEYVA_BOYACA_VILLA_DE_LEYVA",
        label: "Villa de Leyva / Boyacá / Villa de Leyva",
        elevationM: 2140,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "ALMAGUER_CAUCA_ALMAGUER",
        label: "Almaguer / Cauca / Almaguer",
        elevationM: 1950,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "BOAVITA_BOYACA_BOAVITA",
        label: "Boavita / Boyacá / Boavita",
        elevationM: 1950,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "JERICO_ANTIOQUIA_JERICO",
        label: "Jericó / Antioquia / Jericó",
        elevationM: 1950,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SANTANA_BOYACA_SANTANA",
        label: "Santana / Boyacá / Santana",
        elevationM: 1950,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SOATA_BOYACA_SOATA",
        label: "Soatá / Boyacá / Soatá",
        elevationM: 1950,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SALENTO_QUINDIO_SALENTO",
        label: "Salento / Quindío / Salento",
        elevationM: 1895,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CHITAGA_NORTE_DE_SANTANDER_CHITAGA",
        label: "Chitagá / Norte de Santander / Chitagá",
        elevationM: 1870,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "ANSERMA_CALDAS_ANSERMA",
        label: "Anserma / Caldas / Anserma",
        elevationM: 1850,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "URRAO_ANTIOQUIA_URRAO",
        label: "Urrao / Antioquia / Urrao",
        elevationM: 1830,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "APARCO_CAUCA_SANDONA",
        label: "Aparco / Cauca / Sandoná",
        elevationM: 1800,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CARRIZALES_ANTIOQUIA_CARRIZALES",
        label: "Carrizales / Antioquia / Carrizales",
        elevationM: 1800,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CERRO_CALIMA_VALLE_DEL_CAUCA_CALIMA",
        label: "Cerro Calima / Valle del Cauca / Calima",
        elevationM: 1800,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "FARALLONES_DE_CITARA_CHOCO_ANTIOQUIA_ANDES_MEDIO_BAUDO",
        label: "Farallones de Citará / Chocó / Antioquia / Andes / Medio Baudó",
        elevationM: 1800,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "GUATEQUE_BOYACA_GUATEQUE",
        label: "Guateque / Boyacá / Guateque",
        elevationM: 1800,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "IQUIRA_HUILA_IQUIRA",
        label: "Íquira / Huila / Íquira",
        elevationM: 1800,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "ISNOS_HUILA_ISNOS",
        label: "Isnos / Huila / Isnos",
        elevationM: 1800,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PALESTINA_HUILA_PALESTINA",
        label: "Palestina / Huila / Palestina",
        elevationM: 1800,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "QUINCHIA_RISARALDA_QUINCHIA",
        label: "Quinchía / Risaralda / Quinchía",
        elevationM: 1800,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "RIOSUCIO_CALDAS_RIOSUCIO",
        label: "Riosucio / Caldas / Riosucio",
        elevationM: 1780,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "EL_JARDIN_ANTIOQUIA_JARDIN",
        label: "El Jardín / Antioquia / Jardín",
        elevationM: 1750,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "JARDIN_ANTIOQUIA_JARDIN",
        label: "Jardín / Antioquia / Jardín",
        elevationM: 1750,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SAN_AGUSTIN_HUILA_SAN_AGUSTIN",
        label: "San Agustín / Huila / San Agustín",
        elevationM: 1730,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "ZAPATOCA_SANTANDER_ZAPATOCA",
        label: "Zapatoca / Santander / Zapatoca",
        elevationM: 1730,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "BELALCAZAR_CAUCA_BALBOA",
        label: "Belalcázar / Cauca / Balboa",
        elevationM: 1700,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LA_CRUZ_NARINO_LA_CRUZ",
        label: "La Cruz / Nariño / La Cruz",
        elevationM: 1700,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MOGOTES_SANTANDER_MOGOTES",
        label: "Mogotes / Santander / Mogotes",
        elevationM: 1700,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MONIQUIRA_BOYACA_MONIQUIRA",
        label: "Moniquirá / Boyacá / Moniquirá",
        elevationM: 1700,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "VELEZ_SANTANDER_VELEZ",
        label: "Vélez / Santander / Vélez",
        elevationM: 1700,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "TRUJILLO_VALLE_DEL_CAUCA_TRUJILLO",
        label: "Trujillo / Valle del Cauca / Trujillo",
        elevationM: 1650,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "APIA_RISARALDA_APIA",
        label: "Apía / Risaralda / Apía",
        elevationM: 1630,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CALARCA_QUINDIO_CALARCA",
        label: "Calarcá / Quindío / Calarcá",
        elevationM: 1600,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "GARAGOA_BOYACA_GARAGOA",
        label: "Garagoa / Boyacá / Garagoa",
        elevationM: 1600,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LOS_CUROS_SANTANDER_PIEDECUESTA",
        label: "Los Curos / Santander / Piedecuesta",
        elevationM: 1600,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MIRAFLORES_BOYACA_MIRAFLORES",
        label: "Miraflores / Boyacá / Miraflores",
        elevationM: 1600,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PAUNA_BOYACA_PAUNA",
        label: "Pauna / Boyacá / Pauna",
        elevationM: 1600,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SANTA_CRUZ_NARINO_SANTA_CRUZ_DE_GUACHAVES",
        label: "Santa Cruz / Nariño / Santa Cruz de Guachavés",
        elevationM: 1600,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "ANORI_ANTIOQUIA_ANORI",
        label: "Anorí / Antioquia / Anorí",
        elevationM: 1550,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CURITI_SANTANDER_CURITI",
        label: "Curití / Santander / Curití",
        elevationM: 1550,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "FRONTINO_ANTIOQUIA_FRONTINO",
        label: "Frontino / Antioquia / Frontino",
        elevationM: 1550,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "EL_PLATEADO_CAUCA_ARGELIA",
        label: "El Plateado / Cauca / Argelia",
        elevationM: 1500,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PLANADAS_TOLIMA_PLANADAS",
        label: "Planadas / Tolima / Planadas",
        elevationM: 1500,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "ARMENIA_QUINDIO_ARMENIA",
        label: "Armenia / Quindío / Armenia",
        elevationM: 1480,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "BALBOA_CAUCA_BALBOA",
        label: "Balboa / Cauca / Balboa",
        elevationM: 1450,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CEPITA_SANTANDER_CEPITA",
        label: "Cepitá / Santander / Cepitá",
        elevationM: 1450,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "ITUANGO_ANTIOQUIA_ITUANGO",
        label: "Ituango / Antioquia / Ituango",
        elevationM: 1450,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "ALPE_HUILA_ACEVEDO",
        label: "Alpe / Huila / Acevedo",
        elevationM: 1400,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "OIBA_SANTANDER_OIBA",
        label: "Oiba / Santander / Oiba",
        elevationM: 1400,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "ACEVEDO_HUILA_ACEVEDO",
        label: "Acevedo / Huila / Acevedo",
        elevationM: 1380,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "GOMEZ_PLATA_ANTIOQUIA_GOMEZ_PLATA",
        label: "Gómez Plata / Antioquia / Gómez Plata",
        elevationM: 1380,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "ANDES_ANTIOQUIA_ANDES",
        label: "Andes / Antioquia / Andes",
        elevationM: 1350,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PITALITO_HUILA_PITALITO",
        label: "Pitalito / Huila / Pitalito",
        elevationM: 1350,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SUAREZ_CAUCA_SUAREZ",
        label: "Suárez / Cauca / Suárez",
        elevationM: 1350,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LOS_LLANOS_ANTIOQUIA_VALDIVIA",
        label: "Los Llanos / Antioquia / Valdivia",
        elevationM: 1300,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "VALDIVIA_ANTIOQUIA_VALDIVIA",
        label: "Valdivia / Antioquia / Valdivia",
        elevationM: 1300,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "BARICHARA_SANTANDER_BARICHARA",
        label: "Barichara / Santander / Barichara",
        elevationM: 1290,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "IBAGUE_TOLIMA_IBAGUE",
        label: "Ibagué / Tolima / Ibagué",
        elevationM: 1285,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "ARGELIA_CAUCA_ARGELIA",
        label: "Argelia / Cauca / Argelia",
        elevationM: 1250,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SACAMA_CASANARE_SACAMA",
        label: "Sácama / Casanare / Sácama",
        elevationM: 1250,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SOCORRO_SANTANDER_SOCORRO",
        label: "Socorro / Santander / Socorro",
        elevationM: 1230,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CERRO_SAN_LUCAS_BOLIVAR_MONTECRISTO",
        label: "Cerro San Lucas / Bolívar / Montecristo",
        elevationM: 1200,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PRADERA_VALLE_DEL_CAUCA_PRADERA",
        label: "Pradera / Valle del Cauca / Pradera",
        elevationM: 1200,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SALGAR_ANTIOQUIA_SALGAR",
        label: "Salgar / Antioquia / Salgar",
        elevationM: 1200,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CHINACOTA_NORTE_DE_SANTANDER_CHINACOTA",
        label: "Chinácota / Norte de Santander / Chinácota",
        elevationM: 1170,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SAN_GIL_SANTANDER_SAN_GIL",
        label: "San Gil / Santander / San Gil",
        elevationM: 1110,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "BRICENO_ANTIOQUIA_BRICENO",
        label: "Briceño / Antioquia / Briceño",
        elevationM: 1100,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CAPITANEJO_SANTANDER_CAPITANEJO",
        label: "Capitanejo / Santander / Capitanejo",
        elevationM: 1100,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LA_TABADA_CALDAS_PALESTINA",
        label: "La Tabada / Caldas / Palestina",
        elevationM: 1100,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUEBLO_BELLO_CESAR_PUEBLO_BELLO",
        label: "Pueblo Bello / Cesar / Pueblo Bello",
        elevationM: 1100,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "RECETOR_CASANARE_RECETOR",
        label: "Recetor / Casanare / Recetor",
        elevationM: 1100,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SANTANDER_DE_QUILICHAO_CAUCA_SANTANDER_DE_QUILICHAO",
        label: "Santander de Quilichao / Cauca / Santander de Quilichao",
        elevationM: 1050,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "TAMARA_CASANARE_TAMARA",
        label: "Támara / Casanare / Támara",
        elevationM: 1050,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "FLORIDA_VALLE_DEL_CAUCA_FLORIDA",
        label: "Florida / Valle del Cauca / Florida",
        elevationM: 1020,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "GUACARI_VALLE_DEL_CAUCA_GUACARI",
        label: "Guacarí / Valle del Cauca / Guacarí",
        elevationM: 1000,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "JAMUNDI_VALLE_DEL_CAUCA_JAMUNDI",
        label: "Jamundí / Valle del Cauca / Jamundí",
        elevationM: 1000,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MIRANDA_CAUCA_MIRANDA",
        label: "Miranda / Cauca / Miranda",
        elevationM: 1000,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PALMIRA_VALLE_DEL_CAUCA_PALMIRA",
        label: "Palmira / Valle del Cauca / Palmira",
        elevationM: 1000,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PIEDECUESTA_SANTANDER_PIEDECUESTA",
        label: "Piedecuesta / Santander / Piedecuesta",
        elevationM: 1000,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "YUMBO_VALLE_DEL_CAUCA_YUMBO",
        label: "Yumbo / Valle del Cauca / Yumbo",
        elevationM: 1000,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "ANDALUCIA_VALLE_DEL_CAUCA_ANDALUCIA",
        label: "Andalucía / Valle del Cauca / Andalucía",
        elevationM: 995,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CALI_VALLE_DEL_CAUCA_CALI",
        label: "Cali / Valle del Cauca / Cali",
        elevationM: 995,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "EL_CERRITO_VALLE_DEL_CAUCA_EL_CERRITO",
        label: "El Cerrito / Valle del Cauca / El Cerrito",
        elevationM: 995,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "GUADALAJARA_DE_BUGA_VALLE_DEL_CAUCA_BUGA",
        label: "Guadalajara de Buga / Valle del Cauca / Buga",
        elevationM: 970,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "TULUA_VALLE_DEL_CAUCA_TULUA",
        label: "Tuluá / Valle del Cauca / Tuluá",
        elevationM: 960,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "ARBOLEDAS_NORTE_DE_SANTANDER_ARBOLEDAS",
        label: "Arboledas / Norte de Santander / Arboledas",
        elevationM: 950,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "BOLEDAS_NORTE_DE_SANTANDER_ARBOLEDAS",
        label: "Boledas / Norte de Santander / Arboledas",
        elevationM: 950,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LA_UNION_VALLE_DEL_CAUCA_LA_UNION",
        label: "La Unión / Valle del Cauca / La Unión",
        elevationM: 950,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUERTO_TEJADA_CAUCA_PUERTO_TEJADA",
        label: "Puerto Tejada / Cauca / Puerto Tejada",
        elevationM: 950,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "ROLDANILLO_VALLE_DEL_CAUCA_ROLDANILLO",
        label: "Roldanillo / Valle del Cauca / Roldanillo",
        elevationM: 950,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "VALPARAISO_CAQUETA_VALPARAISO",
        label: "Valparaíso / Caquetá / Valparaíso",
        elevationM: 950,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CARTAGO_VALLE_DEL_CAUCA_CARTAGO",
        label: "Cartago / Valle del Cauca / Cartago",
        elevationM: 917,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "DAGUA_VALLE_DEL_CAUCA_DAGUA",
        label: "Dagua / Valle del Cauca / Dagua",
        elevationM: 900,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "GUAMOCO_BOLIVAR_SANTA_ROSA_DEL_SUR",
        label: "Guamocó / Bolívar / Santa Rosa del Sur",
        elevationM: 900,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "TASAMIA_CALDAS_MANIZALES",
        label: "Tasamía / Caldas / Manizales",
        elevationM: 900,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "VALPARAISO_CAQUETA_VALPARAISO",
        label: "Valparaíso / Caquetá / Valparaíso",
        elevationM: 900,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "ROVIRA_TOLIMA_ROVIRA",
        label: "Rovira / Tolima / Rovira",
        elevationM: 850,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SAN_VICENTE_DE_CHUCURI_SANTANDER_SAN_VICENTE_DE_CHUCURI",
        label: "San Vicente de Chucurí / Santander / San Vicente de Chucurí",
        elevationM: 850,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SAN_LUIS_DE_GACENO_BOYACA_SAN_LUIS_DE_GACENO",
        label: "San Luis de Gaceno / Boyacá / San Luis de Gaceno",
        elevationM: 800,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SANTA_MARIA_HUILA_SANTA_MARIA",
        label: "Santa María / Huila / Santa María",
        elevationM: 800,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "VIDA_LA_UNION_HUILA_LA_UNION",
        label: "Vida La Unión / Huila / La Unión",
        elevationM: 800,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "OTANCHE_BOYACA_OTANCHE",
        label: "Otanche / Boyacá / Otanche",
        elevationM: 750,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SANTA_ROSA_DEL_SUR_BOLIVAR_SANTA_ROSA_DEL_SUR",
        label: "Santa Rosa del Sur / Bolívar / Santa Rosa del Sur",
        elevationM: 750,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "BARAYA_HUILA_BARAYA",
        label: "Baraya / Huila / Baraya",
        elevationM: 730,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "EL_CARMEN_DE_CHUCURI_SANTANDER_EL_CARMEN_DE_CHUCURI",
        label: "El Carmen de Chucurí / Santander / El Carmen de Chucurí",
        elevationM: 700,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MONTECRISTO_BOLIVAR_MONTECRISTO",
        label: "Montecristo / Bolívar / Montecristo",
        elevationM: 700,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "RIVERA_HUILA_RIVERA",
        label: "Rivera / Huila / Rivera",
        elevationM: 700,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "YAGUARA_HUILA_YAGUARA",
        label: "Yaguara / Huila / Yaguará",
        elevationM: 700,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MOCOA_PUTUMAYO_MOCOA",
        label: "Mocoa / Putumayo / Mocoa",
        elevationM: 604,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CANELOS_BOLIVAR_SANTA_ROSA_DEL_SUR",
        label: "Canelos / Bolívar / Santa Rosa del Sur",
        elevationM: 600,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "EL_PATIA_CAUCA_PATIA",
        label: "El Patía / Cauca / Patía",
        elevationM: 600,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LANDAZURI_SANTANDER_LANDAZURI",
        label: "Landázuri / Santander / Landázuri",
        elevationM: 600,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PERICONGO_HUILA_TIMANA",
        label: "Pericongo / Huila / Timaná",
        elevationM: 600,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CAMPO_ALEGRE_HUILA_CAMPOALEGRE",
        label: "Campo Alegre / Huila / Campoalegre",
        elevationM: 550,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SANTANA_RAMOS_HUILA_AIPE",
        label: "Santana Ramos / Huila / Aipe",
        elevationM: 550,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "TELLO_HUILA_TELLO",
        label: "Tello / Huila / Tello",
        elevationM: 540,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "DABEIBA_ANTIOQUIA_DABEIBA",
        label: "Dabeiba / Antioquia / Dabeiba",
        elevationM: 450,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "DOLORES_TOLIMA_DOLORES",
        label: "Dolores / Tolima / Dolores",
        elevationM: 450,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "EL_REMOLINO_HUILA_TIMANA",
        label: "El Remolino / Huila / Timaná",
        elevationM: 450,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "OPORT_CAQUETA_SAN_VICENTE_DEL_CAGUAN",
        label: "Opórt / Caquetá / San Vicente del Caguán",
        elevationM: 450,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PALERMO_HUILA_PALERMO",
        label: "Palermo / Huila / Palermo",
        elevationM: 450,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "NEIVA_HUILA_NEIVA",
        label: "Neiva / Huila / Neiva",
        elevationM: 442,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "VISTAHERMOSA_META_VISTAHERMOSA",
        label: "Vistahermosa / Meta / Vistahermosa",
        elevationM: 430,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "AIPE_HUILA_AIPE",
        label: "Aipe / Huila / Aipe",
        elevationM: 420,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PARQUE_NACIONAL_NATURAL_TINIGUA_META_LA_MACARENA",
        label: "Parque Nacional Natural Tinigua / Meta / La Macarena",
        elevationM: 400,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PINALITO_CAQUETA_SAN_VICENTE_DEL_CAGUAN",
        label: "Pinalito / Caquetá / San Vicente del Caguán",
        elevationM: 400,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "YUCAO_META_ACACIAS",
        label: "Yucao / Meta / Acacías",
        elevationM: 400,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "ORITO_PUTUMAYO_ORITO",
        label: "Orito / Putumayo / Orito",
        elevationM: 360,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "BELEN_DE_LOS_ANDAQUIES_CAQUETA_BELEN_DE_LOS_ANDAQUIES",
        label: "Belén de los Andaquíes / Caquetá / Belén de los Andaquíes",
        elevationM: 350,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "EL_DONCELLO_CAQUETA_EL_DONCELLO",
        label: "El Doncello / Caquetá / El Doncello",
        elevationM: 350,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "EL_PAUJIL_CAQUETA_EL_PAUJIL",
        label: "El Paujil / Caquetá / El Paujil",
        elevationM: 350,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "EL_YOPAL_CASANARE_YOPAL",
        label: "El Yopal / Casanare / Yopal",
        elevationM: 350,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MORELIA_CAQUETA_MORELIA",
        label: "Morelia / Caquetá / Morelia",
        elevationM: 350,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PENAS_COLORADAS_CAQUETA_SAN_VICENTE_DEL_CAGUAN",
        label: "Peñas Coloradas / Caquetá / San Vicente del Caguán",
        elevationM: 350,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PORE_CASANARE_PORE",
        label: "Pore / Casanare / Pore",
        elevationM: 350,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PORVENIR_CAQUETA_CARTAGENA_DEL_CHAIRA",
        label: "Porvenir / Caquetá / Cartagena del Chairá",
        elevationM: 350,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUERTO_BETANIA_ANTIOQUIA_PUERTO_BETANIA",
        label: "Puerto Betania / Antioquia / Puerto Betania",
        elevationM: 350,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUERTO_RICO_CAQUETA_PUERTO_RICO",
        label: "Puerto Rico / Caquetá / Puerto Rico",
        elevationM: 350,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SAN_JUAN_CAQUETA_SAN_JUAN_DE_ARAMA",
        label: "San Juan / Caquetá / San Juan de Arama",
        elevationM: 350,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "TILODIRAN_CASANARE_YOPAL",
        label: "Tilodirán / Casanare / Yopal",
        elevationM: 350,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "VILLA_NUEVA_META_SAN_MARTIN",
        label: "Villa Nueva / Meta / San Martín",
        elevationM: 350,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PRADO_TOLIMA_PRADO",
        label: "Prado / Tolima / Prado",
        elevationM: 340,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUERTO_ASIS_PUTUMAYO_PUERTO_ASIS",
        label: "Puerto Asís / Putumayo / Puerto Asís",
        elevationM: 340,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LA_HORMIGA_PUTUMAYO_VALLE_DEL_GUAMUEZ",
        label: "La Hormiga / Putumayo / Valle del Guamuez",
        elevationM: 330,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PAZ_DE_ARIPORO_CASANARE_PAZ_DE_ARIPORO",
        label: "Paz de Ariporo / Casanare / Paz de Ariporo",
        elevationM: 330,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUERTO_GUZMAN_PUTUMAYO_PUERTO_GUZMAN",
        label: "Puerto Guzmán / Putumayo / Puerto Guzmán",
        elevationM: 330,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "VILLAGARZON_PUTUMAYO_VILLAGARZON",
        label: "Villagarzón / Putumayo / Villagarzón",
        elevationM: 330,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "GUAMO_TOLIMA_GUAMO",
        label: "Guamo / Tolima / Guamo",
        elevationM: 326,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PURIFICACION_TOLIMA_PURIFICACION",
        label: "Purificación / Tolima / Purificación",
        elevationM: 325,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "EL_ESPINAL_TOLIMA_EL_ESPINAL",
        label: "El Espinal / Tolima / El Espinal",
        elevationM: 320,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LA_TAGUA_PUTUMAYO_VALLE_DEL_GUAMUEZ",
        label: "La Tagua / Putumayo / Valle del Guamuez",
        elevationM: 320,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "YURAYACO_CAQUETA_SAN_JOSE_DEL_FRAGUA",
        label: "Yurayaco / Caquetá / San José del Fragua",
        elevationM: 320,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "ARENAL_BOLIVAR_ARENAL",
        label: "Arenal / Bolívar / Arenal",
        elevationM: 300,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CABUYARO_META_CABUYARO",
        label: "Cabuyaro / Meta / Cabuyaro",
        elevationM: 300,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CAMPO_DE_ATERRIZAJE_CAQUETA_SAN_VICENTE_DEL_CAGUAN",
        label: "Campo de Aterrizaje / Caquetá / San Vicente del Caguán",
        elevationM: 300,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "EL_SINAI_CAQUETA_SAN_VICENTE_DEL_CAGUAN",
        label: "El Sinaí / Caquetá / San Vicente del Caguán",
        elevationM: 300,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "HORIZONTE_CAQUETA_LA_MONTANITA",
        label: "Horizonte / Caquetá / La Montañita",
        elevationM: 300,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LA_CABUYA_CASANARE_AGUAZUL",
        label: "La Cabuya / Casanare / Aguazul",
        elevationM: 300,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LA_JULIA_CAQUETA_LA_MONTANITA",
        label: "La Julia / Caquetá / La Montañita",
        elevationM: 300,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LA_PAZ_CAQUETA_LA_MONTANITA",
        label: "La Paz / Caquetá / La Montañita",
        elevationM: 300,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LA_TUNIA_CAQUETA_SAN_VICENTE_DEL_CAGUAN",
        label: "La Tunia / Caquetá / San Vicente del Caguán",
        elevationM: 300,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LA_TUNIA_SUROESTE_2_CAQUETA_SAN_VICENTE_DEL_CAGUAN",
        label: "La Tunia Suroeste-2 / Caquetá / San Vicente del Caguán",
        elevationM: 300,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LA_UNION_PENEYA_CAQUETA_LA_MONTANITA",
        label: "La Unión Peneya / Caquetá / La Montañita",
        elevationM: 300,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MILAN_CAQUETA_MILAN",
        label: "Milán / Caquetá / Milán",
        elevationM: 300,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUERTO_GUADALUPE_CAQUETA_LA_MONTANITA",
        label: "Puerto Guadalupe / Caquetá / La Montañita",
        elevationM: 300,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUERTO_RICO_EL_DONCELLO_CAQUETA_EL_DONCELLO",
        label: "Puerto Rico (El Doncello) / Caquetá / El Doncello",
        elevationM: 300,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SAN_JOSE_DEL_FRAGUA_CAQUETA_SAN_JOSE_DEL_FRAGUA",
        label: "San José del Fragua / Caquetá / San José del Fragua",
        elevationM: 300,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "GIRARDOT_CUNDINAMARCA_GIRARDOT",
        label: "Girardot / Cundinamarca / Girardot",
        elevationM: 289,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CURILLO_CAQUETA_CURILLO",
        label: "Curillo / Caquetá / Curillo",
        elevationM: 280,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SAN_VICENTE_DEL_CAGUAN_CAQUETA_SAN_VICENTE_DEL_CAGUAN",
        label: "San Vicente del Caguán / Caquetá / San Vicente del Caguán",
        elevationM: 270,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "RIONEGRO_CAQUETA_LA_MONTANITA",
        label: "Rionegro / Caquetá / La Montañita",
        elevationM: 260,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SAN_FRANCISCO_CAQUETA_BELEN_DE_LOS_ANDAQUIES",
        label: "San Francisco / Caquetá / Belén de los Andaquíes",
        elevationM: 260,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "VILLANUEVA_LA_GUAJIRA_VILLANUEVA",
        label: "Villanueva / La Guajira / Villanueva",
        elevationM: 260,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "AIRAPUA_CAQUETA_CARTAGENA_DEL_CHAIRA",
        label: "Airapua / Caquetá / Cartagena del Chairá",
        elevationM: 250,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "BOCAS_CAQUETA_CARTAGENA_DEL_CHAIRA",
        label: "Bocas / Caquetá / Cartagena del Chairá",
        elevationM: 250,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CAGUAN_CAQUETA_CARTAGENA_DEL_CHAIRA",
        label: "Caguán / Caquetá / Cartagena del Chairá",
        elevationM: 250,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CAMPO_HERMOSO_CAQUETA_CARTAGENA_DEL_CHAIRA",
        label: "Campo Hermoso / Caquetá / Cartagena del Chairá",
        elevationM: 250,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CANDELIJAS_ESTE_2_CAQUETA_CARTAGENA_DEL_CHAIRA",
        label: "Candelijas Este 2 / Caquetá / Cartagena del Chairá",
        elevationM: 250,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CANDELIJAS_SUDESTE_CAQUETA_CARTAGENA_DEL_CHAIRA",
        label: "Candelijas Sudeste / Caquetá / Cartagena del Chairá",
        elevationM: 250,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CARTAGENA_DEL_CHAIRA_CAQUETA_CARTAGENA_DEL_CHAIRA",
        label: "Cartagena del Chairá / Caquetá / Cartagena del Chairá",
        elevationM: 250,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CASA_AGAPITO_CAQUETA_CARTAGENA_DEL_CHAIRA",
        label: "Casa Agapito / Caquetá / Cartagena del Chairá",
        elevationM: 250,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "DIVISO_CAQUETA_ALBANIA",
        label: "Diviso / Caquetá / Albania",
        elevationM: 250,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "EL_BILLAR_CAQUETA_CARTAGENA_DEL_CHAIRA",
        label: "El Billar / Caquetá / Cartagena del Chairá",
        elevationM: 250,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "EL_GUIO_CAQUETA_CARTAGENA_DEL_CHAIRA",
        label: "El Guio / Caquetá / Cartagena del Chairá",
        elevationM: 250,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "EL_TIGRE_CAQUETA_SAN_VICENTE_DEL_CAGUAN",
        label: "El Tigre / Caquetá / San Vicente del Caguán",
        elevationM: 250,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "HATO_COROZAL_CASANARE_HATO_COROZAL",
        label: "Hato Corozal / Casanare / Hato Corozal",
        elevationM: 250,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "HUSITO_CAQUETA_CARTAGENA_DEL_CHAIRA",
        label: "Húsito / Caquetá / Cartagena del Chairá",
        elevationM: 250,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "ISLA_GRANDE_CAQUETA_CARTAGENA_DEL_CHAIRA",
        label: "Isla Grande / Caquetá / Cartagena del Chairá",
        elevationM: 250,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LA_CHAPARRERA_CASANARE_YOPAL",
        label: "La Chaparrera / Casanare / Yopal",
        elevationM: 250,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LA_MACARENA_META_LA_MACARENA",
        label: "La Macarena / Meta / La Macarena",
        elevationM: 250,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LA_PERRA_CAQUETA_CARTAGENA_DEL_CHAIRA",
        label: "La Perra / Caquetá / Cartagena del Chairá",
        elevationM: 250,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "NUNCHIA_CASANARE_NUNCHIA",
        label: "Nunchía / Casanare / Nunchía",
        elevationM: 250,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PALMARITO_CASANARE_PAZ_DE_ARIPORO",
        label: "Palmarito / Casanare / Paz de Ariporo",
        elevationM: 250,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "URUMITA_LA_GUAJIRA_URUMITA",
        label: "Urumita / La Guajira / Urumita",
        elevationM: 250,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "YARUMALES_CAQUETA_SAN_VICENTE_DEL_CAGUAN",
        label: "Yarumales / Caquetá / San Vicente del Caguán",
        elevationM: 250,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "FLORENCIA_CAQUETA_FLORENCIA",
        label: "Florencia / Caquetá / Florencia",
        elevationM: 242,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SANTA_FE_DEL_CAGUAN_CAQUETA_SAN_VICENTE_DEL_CAGUAN",
        label: "Santa Fé del Caguán / Caquetá / San Vicente del Caguán",
        elevationM: 240,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUERTO_LLERAS_META_PUERTO_LLERAS",
        label: "Puerto Lleras / Meta / Puerto Lleras",
        elevationM: 230,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SAN_ANTONIO_DE_GETUCHA_CAQUETA_SAN_VICENTE_DEL_CAGUAN",
        label: "San Antonio de Getucha / Caquetá / San Vicente del Caguán",
        elevationM: 220,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CDAD_YARI_CAQUETA_SAN_VICENTE_DEL_CAGUAN",
        label: "Cdad. Yarí / Caquetá / San Vicente del Caguán",
        elevationM: 210,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MAPIRIPAN_META_MAPIRIPAN",
        label: "Mapiripán / Meta / Mapiripán",
        elevationM: 210,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SAN_JOSE_DE_OCUNE_META_PUERTO_GAITAN",
        label: "San José de Ocune / Meta / Puerto Gaitán",
        elevationM: 210,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CHUPABE_META_PUERTO_GAITAN",
        label: "Chupabe / Meta / Puerto Gaitán",
        elevationM: 200,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CRAVO_VIEJO_CASANARE_CRAVO_VIEJO",
        label: "Cravo Viejo / Casanare / Cravo Viejo",
        elevationM: 200,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LA_CAUCANA_ANTIOQUIA_TARAZA",
        label: "La Caucana / Antioquia / Tarazá",
        elevationM: 200,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LA_JUNTA_LA_GUAJIRA_SAN_JUAN_DEL_CESAR",
        label: "La Junta / La Guajira / San Juan del Cesar",
        elevationM: 200,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LA_PAZ_CESAR_LA_PAZ",
        label: "La Paz / Cesar / La Paz",
        elevationM: 200,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LOS_ROBLES_LA_PAZ_CESAR_LA_PAZ",
        label: "Los Robles – La Paz / Cesar / La Paz",
        elevationM: 200,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MANI_CASANARE_MANI",
        label: "Maní / Casanare / Maní",
        elevationM: 200,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PARQUE_NACIONAL_NATURAL_MACUIRA_LA_GUAJIRA_URIBIA",
        label: "Parque Nacional Natural Macuira / La Guajira / Uribia",
        elevationM: 200,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PLANAS_META_PUERTO_GAITAN",
        label: "Planas / Meta / Puerto Gaitán",
        elevationM: 200,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUERTO_CACHICAMO_META_PUERTO_RICO",
        label: "Puerto Cachicamo / Meta / Puerto Rico",
        elevationM: 200,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SABANAS_DEL_YARI_CAQUETA_SAN_VICENTE_DEL_CAGUAN",
        label: "Sabanas del Yarí / Caquetá / San Vicente del Caguán",
        elevationM: 200,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SAN_JUAN_DEL_CESAR_LA_GUAJIRA_SAN_JUAN_DEL_CESAR",
        label: "San Juan del Cesar / La Guajira / San Juan del Cesar",
        elevationM: 200,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SANTA_RITA_CAQUETA_CARTAGENA_DEL_CHAIRA",
        label: "Santa Rita / Caquetá / Cartagena del Chairá",
        elevationM: 200,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "TOLIMA_PUNTO_RURAL_CAQUETA_CARTAGENA_DEL_CHAIRA",
        label: "Tolima (punto rural) / Caquetá / Cartagena del Chairá",
        elevationM: 200,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LA_14_META_PUERTO_GAITAN",
        label: "La 14 / Meta / Puerto Gaitán",
        elevationM: 195,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUERTO_SILVANIA_CAQUETA_CARTAGENA_DEL_CHAIRA",
        label: "Puerto Silvania / Caquetá / Cartagena del Chairá",
        elevationM: 195,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CACHIPORRO_CAQUETA_CARTAGENA_DEL_CHAIRA",
        label: "Cachiporro / Caquetá / Cartagena del Chairá",
        elevationM: 190,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CALAMAR_GUAVIARE_CALAMAR",
        label: "Calamar / Guaviare / Calamar",
        elevationM: 190,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LA_CRISTALINA_META_PUERTO_GAITAN",
        label: "La Cristalina / Meta / Puerto Gaitán",
        elevationM: 190,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LAS_DELICIAS_GUAVIARE_MIRAFLORES",
        label: "Las Delicias / Guaviare / Miraflores",
        elevationM: 190,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LAS_GAVIOTAS_META_PUERTO_GAITAN",
        label: "Las Gaviotas / Meta / Puerto Gaitán",
        elevationM: 190,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "REMOLINO_CAQUETA_SOLANO",
        label: "Remolino / Caquetá / Solano",
        elevationM: 190,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SOLITA_CAQUETA_SOLITA",
        label: "Solita / Caquetá / Solita",
        elevationM: 190,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CARURU_VAUPES_CARURU",
        label: "Carurú / Vaupés / Carurú",
        elevationM: 185,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CUEMANI_GUAVIARE_MIRAFLORES",
        label: "Cuemani / Guaviare / Miraflores",
        elevationM: 185,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "EL_JOROPO_META_PUERTO_GAITAN",
        label: "El Joropo / Meta / Puerto Gaitán",
        elevationM: 185,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "EL_RETORNO_GUAVIARE_EL_RETORNO",
        label: "El Retorno / Guaviare / El Retorno",
        elevationM: 185,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MIRAFLORES_GUAVIARE_MIRAFLORES",
        label: "Miraflores / Guaviare / Miraflores",
        elevationM: 185,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUERTO_SUAREZ_CAQUETA_CARTAGENA_DEL_CHAIRA",
        label: "Puerto Suárez / Caquetá / Cartagena del Chairá",
        elevationM: 185,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "YAPU_VAUPES_YAPU",
        label: "Yapú / Vaupés / Yapú",
        elevationM: 185,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "ANGOSTURA_GUAVIARE_MIRAFLORES",
        label: "Angostura / Guaviare / Miraflores",
        elevationM: 180,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CACAHUAL_GUAVIARE_MIRAFLORES",
        label: "Cacahual / Guaviare / Miraflores",
        elevationM: 180,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "GUAVIARE_POBLADO_GUAVIARE_MIRAFLORES",
        label: "Guaviare (poblado) / Guaviare / Miraflores",
        elevationM: 180,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "META_META_AREA_RURAL_CENTRAL",
        label: "Meta / Meta / Área rural central",
        elevationM: 180,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MITU_VAUPES_MITU",
        label: "Mitú / Vaupés / Mitú",
        elevationM: 180,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUERTO_CUBA_CAQUETA_CARTAGENA_DEL_CHAIRA",
        label: "Puerto Cuba / Caquetá / Cartagena del Chairá",
        elevationM: 180,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUERTO_LOPEZ_META_PUERTO_LOPEZ",
        label: "Puerto López / Meta / Puerto López",
        elevationM: 180,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "RAUDAL_META_VISTAHERMOSA",
        label: "Raudal / Meta / Vistahermosa",
        elevationM: 180,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "RESERVA_NACIONAL_NATURAL_GUAVIARE_GUAVIARE_SAN_JOSE_DEL_GUAVIARE",
        label: "Reserva Nacional Natural Guaviare / Guaviare / San José del Guaviare",
        elevationM: 180,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "TRES_ESQUINAS_CAQUETA_SOLANO",
        label: "Tres Esquinas / Caquetá / Solano",
        elevationM: 180,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "VILLA_GLADIS_CAQUETA_CARTAGENA_DEL_CHAIRA",
        label: "Villa Gladis / Caquetá / Cartagena del Chairá",
        elevationM: 180,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CUCUTA_VEREDA_GUAVIARE_MIRAFLORES",
        label: "Cucutá (vereda) / Guaviare / Miraflores",
        elevationM: 178,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LA_FRONTERA_GUAVIARE_SAN_JOSE_DEL_GUAVIARE",
        label: "La Frontera / Guaviare / San José del Guaviare",
        elevationM: 175,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MACUJE_GUAVIARE_MIRAFLORES",
        label: "Macuje / Guaviare / Miraflores",
        elevationM: 175,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MORICHAL_NUEVO_VAUPES_MITU",
        label: "Morichal Nuevo / Vaupés / Mitú",
        elevationM: 175,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PACO_CAQUETA_CARTAGENA_DEL_CHAIRA",
        label: "Paco / Caquetá / Cartagena del Chairá",
        elevationM: 175,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUERTO_NAPOLES_CAQUETA_SOLANO",
        label: "Puerto Nápoles / Caquetá / Solano",
        elevationM: 175,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "YURUPAIRI_VAUPES_MITU",
        label: "Yurupairí / Vaupés / Mitú",
        elevationM: 175,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "AGUAS_BLANCAS_CESAR_VALLEDUPAR",
        label: "Aguas Blancas / Cesar / Valledupar",
        elevationM: 170,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CIMITARRA_SANTANDER_CIMITARRA",
        label: "Cimitarra / Santander / Cimitarra",
        elevationM: 170,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "COLOMBIA_POBLADO_VAUPES_MITU",
        label: "Colombia (poblado) / Vaupés / Mitú",
        elevationM: 170,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MELO_FRANCO_VAUPES_MITU",
        label: "Melo Franco / Vaupés / Mitú",
        elevationM: 170,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUERTO_NARE_GUAVIARE_GUAVIARE_MIRAFLORES",
        label: "Puerto Nare (Guaviare) / Guaviare / Miraflores",
        elevationM: 170,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUERTO_TRUJILLO_GUAVIARE_SAN_JOSE_DEL_GUAVIARE",
        label: "Puerto Trujillo / Guaviare / San José del Guaviare",
        elevationM: 170,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "REMOLINO_DEL_CAGUAN_CAQUETA_SOLANO",
        label: "Remolino del Caguán / Caquetá / Solano",
        elevationM: 170,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "TRES_ESQUINAS_DEL_CAGUAN_CAQUETA_SOLANO",
        label: "Tres Esquinas del Caguán / Caquetá / Solano",
        elevationM: 170,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "VDA_TOMACHIPAN_GUAVIARE_SAN_JOSE_DEL_GUAVIARE",
        label: "Vda. Tomachipán / Guaviare / San José del Guaviare",
        elevationM: 170,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "YACAYACA_VAUPES_MITU",
        label: "Yacayaca / Vaupés / Mitú",
        elevationM: 170,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUCARON_VAUPES_MITU",
        label: "Pucaron / Vaupés / Mitú",
        elevationM: 168,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "ACARICUARA_VAUPES_MITU",
        label: "Acaricuara / Vaupés / Mitú",
        elevationM: 165,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUERTO_GAITAN_META_PUERTO_GAITAN",
        label: "Puerto Gaitán / Meta / Puerto Gaitán",
        elevationM: 165,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUERTO_PRINCIPE_GUAVIARE_SAN_JOSE_DEL_GUAVIARE",
        label: "Puerto Príncipe / Guaviare / San José del Guaviare",
        elevationM: 165,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "BARRANCO_MINAS_GUAVIARE_EL_RETORNO",
        label: "Barranco Minas / Guaviare / El Retorno",
        elevationM: 160,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "EL_MOLINO_LA_GUAJIRA_EL_MOLINO",
        label: "El Molino / La Guajira / El Molino",
        elevationM: 160,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "GUERIMA_GUAVIARE_SAN_JOSE_DEL_GUAVIARE",
        label: "Guerima / Guaviare / San José del Guaviare",
        elevationM: 160,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SABANA_DE_SAN_ANGEL_MAGDALENA_SABANAS_DE_SAN_ANGEL",
        label: "Sabana de San Ángel / Magdalena / Sabanas de San Ángel",
        elevationM: 160,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "TARAIRA_VAUPES_TARAIRA",
        label: "Taraira / Vaupés / Taraira",
        elevationM: 160,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "TIQUIRE_VAUPES_MITU",
        label: "Tiquire / Vaupés / Mitú",
        elevationM: 160,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "UCAYALI_CAQUETA_SOLANO",
        label: "Ucayali / Caquetá / Solano",
        elevationM: 160,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "VALLEDUPAR_CESAR_VALLEDUPAR",
        label: "Valledupar / Cesar / Valledupar",
        elevationM: 160,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "VDA_LA_OSCURANA_ANTIOQUIA_TARAZA",
        label: "Vda. La Oscurana / Antioquia / Tarazá",
        elevationM: 160,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "ARRECIFAL_GUAVIARE_INIRIDA",
        label: "Arrecifal / Guaviare / Inírida",
        elevationM: 155,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PARI_CACHOEIRA_VAUPES_ZONA_FRONTERIZA_BR",
        label: "Pari Cachoeira / Vaupés / Zona fronteriza BR",
        elevationM: 155,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CHICHIBACOA_CESAR_VALLEDUPAR",
        label: "Chichibacoa / Cesar / Valledupar",
        elevationM: 150,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CHIRIGUANA_CESAR_CHIRIGUANA",
        label: "Chiriguaná / Cesar / Chiriguaná",
        elevationM: 150,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CUCUI_VAUPES_TARAIRA",
        label: "Cucuí / Vaupés / Taraira",
        elevationM: 150,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CURUMANI_CESAR_CURUMANI",
        label: "Curumaní / Cesar / Curumaní",
        elevationM: 150,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "GUARUMO_ANTIOQUIA_TARAZA",
        label: "Guarumo / Antioquia / Tarazá",
        elevationM: 150,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MARIANGOLA_CESAR_VALLEDUPAR",
        label: "Mariangola / Cesar / Valledupar",
        elevationM: 150,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SAN_DIEGO_CESAR_SAN_DIEGO",
        label: "San Diego / Cesar / San Diego",
        elevationM: 150,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "TARAZA_ANTIOQUIA_TARAZA",
        label: "Tarazá / Antioquia / Tarazá",
        elevationM: 150,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "RESERVA_NACIONAL_NATURAL_PUINAWAI_GUAINIA_INIRIDA",
        label: "Reserva Nacional Natural Puinawai / Guainía / Inírida",
        elevationM: 140,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "TUIS_TUIS_ANTIOQUIA_TARAZA",
        label: "Tuis Tuis / Antioquia / Tarazá",
        elevationM: 140,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "GUAVIARE_GUAINIA_GUAVIARE",
        label: "Guaviare / Guainía / Guaviare",
        elevationM: 120,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LOMA_DEL_BALSAMO_MAGDALENA_ARIGUANI",
        label: "Loma del Bálsamo / Magdalena / Ariguaní",
        elevationM: 120,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MAVECURE_GUAINIA_INIRIDA",
        label: "Mavecure / Guainía / Inírida",
        elevationM: 120,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MUTATA_ANTIOQUIA_MUTATA",
        label: "Mutatá / Antioquia / Mutatá",
        elevationM: 120,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "NUEVA_GRANADA_MAGDALENA_NUEVA_GRANADA",
        label: "Nueva Granada / Magdalena / Nueva Granada",
        elevationM: 120,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SAN_MARTIN_CESAR_SAN_MARTIN",
        label: "San Martín / Cesar / San Martín",
        elevationM: 120,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MINGANO_GUAINIA_INIRIDA",
        label: "Mingaño / Guainía / Inírida",
        elevationM: 115,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MANACASIAS_GUAINIA_INIRIDA",
        label: "Manacasías / Guainía / Inírida",
        elevationM: 110,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "NOROSI_BOLIVAR_NOROSI",
        label: "Norosí / Bolívar / Norosí",
        elevationM: 110,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SAMURO_GUAINIA_INIRIDA",
        label: "Samuro / Guainía / Inírida",
        elevationM: 110,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SAN_PABLO_BOLIVAR_SAN_PABLO",
        label: "San Pablo / Bolívar / San Pablo",
        elevationM: 110,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "ZANCUDO_GUAINIA_INIRIDA",
        label: "Zancudo / Guainía / Inírida",
        elevationM: 105,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SANTA_ROSA_GUAINIA_INIRIDA",
        label: "Santa Rosa / Guainía / Inírida",
        elevationM: 102,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "BAGADO_CHOCO_BAGADO",
        label: "Bagadó / Chocó / Bagadó",
        elevationM: 100,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CAUCHERAS_ANTIOQUIA_MUTATA",
        label: "Caucheras / Antioquia / Mutatá",
        elevationM: 100,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "EL_COPEY_CESAR_EL_COPEY",
        label: "El Copey / Cesar / El Copey",
        elevationM: 100,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "EL_DIFICIL_MAGDALENA_ARIGUANI",
        label: "El Difícil / Magdalena / Ariguaní",
        elevationM: 100,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MATRACA_GUAINIA_INIRIDA",
        label: "Matraca / Guainía / Inírida",
        elevationM: 100,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "NAQUEN_GUAINIA_INIRIDA",
        label: "Naquen / Guainía / Inírida",
        elevationM: 100,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUEBLO_NUEVO_CESAR_CHIRIGUANA",
        label: "Pueblo Nuevo / Cesar / Chiriguaná",
        elevationM: 100,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SEJAL_PUNTA_TIGRE_GUAINIA_INIRIDA",
        label: "Sejal Punta Tigre / Guainía / Inírida",
        elevationM: 98,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "INIRIDA_GUAINIA_INIRIDA",
        label: "Inírida / Guainía / Inírida",
        elevationM: 95,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LAS_MONTOYAS_SANTANDER_BARRANCABERMEJA",
        label: "Las Montoyas / Santander / Barrancabermeja",
        elevationM: 95,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MONTOYAS_SANTANDER_BARRANCABERMEJA",
        label: "Montoyas / Santander / Barrancabermeja",
        elevationM: 95,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PANA_PANA_GUAINIA_INIRIDA",
        label: "Pana Pana / Guainía / Inírida",
        elevationM: 95,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PLANETA_RICA_CORDOBA_PLANETA_RICA",
        label: "Planeta Rica / Córdoba / Planeta Rica",
        elevationM: 95,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SAN_FELIPE_GUAINIA_SAN_FELIPE",
        label: "San Felipe / Guainía / San Felipe",
        elevationM: 95,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "ASTREA_CESAR_ASTREA",
        label: "Astrea / Cesar / Astrea",
        elevationM: 90,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MONTELIBANO_CORDOBA_MONTELIBANO",
        label: "Montelíbano / Córdoba / Montelíbano",
        elevationM: 90,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUERTO_BELGICA_ANTIOQUIA_TARAZA",
        label: "Puerto Bélgica / Antioquia / Tarazá",
        elevationM: 90,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "OPONCITO_SANTANDER_BARRANCABERMEJA",
        label: "Oponcito / Santander / Barrancabermeja",
        elevationM: 85,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "YARIMA_SANTANDER_BARRANCABERMEJA",
        label: "Yarima / Santander / Barrancabermeja",
        elevationM: 85,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "ZARAGOZA_ANTIOQUIA_ZARAGOZA",
        label: "Zaragoza / Antioquia / Zaragoza",
        elevationM: 85,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "BUENAVISTA_CORDOBA_BUENAVISTA",
        label: "Buenavista / Córdoba / Buenavista",
        elevationM: 80,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CASABE_SANTANDER_BARRANCABERMEJA",
        label: "Casabe / Santander / Barrancabermeja",
        elevationM: 80,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CUATRO_VIENTOS_CESAR_EL_PASO",
        label: "Cuatro Vientos / Cesar / El Paso",
        elevationM: 80,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "EL_LLANITO_SANTANDER_BARRANCABERMEJA",
        label: "El Llanito / Santander / Barrancabermeja",
        elevationM: 80,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "BARRANCABERMEJA_SANTANDER_BARRANCABERMEJA",
        label: "Barrancabermeja / Santander / Barrancabermeja",
        elevationM: 75,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUERTO_WILCHES_SANTANDER_PUERTO_WILCHES",
        label: "Puerto Wilches / Santander / Puerto Wilches",
        elevationM: 75,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUERTO_WILCHES_SANTANDER_PUERTO_WILCHES",
        label: "Puerto Wilches / Santander / Puerto Wilches",
        elevationM: 75,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "EL_PASO_CESAR_EL_PASO",
        label: "El Paso / Cesar / El Paso",
        elevationM: 70,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LA_GLORIA_CESAR_LA_GLORIA",
        label: "La Gloria / Cesar / La Gloria",
        elevationM: 70,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LA_LOMA_CESAR_EL_PASO",
        label: "La Loma / Cesar / El Paso",
        elevationM: 70,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUERTO_LIBERTADOR_CORDOBA_PUERTO_LIBERTADOR",
        label: "Puerto Libertador / Córdoba / Puerto Libertador",
        elevationM: 70,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUNTO_NUEVO_CORDOBA_VALENCIA",
        label: "Punto Nuevo / Córdoba / Valencia",
        elevationM: 70,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CARACOLICITO_CESAR_EL_COPEY",
        label: "Caracolicito / Cesar / El Copey",
        elevationM: 60,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "EL_BAGRE_VENECIA_ANTIOQUIA_EL_BAGRE",
        label: "El Bagre Venecia / Antioquia / El Bagre",
        elevationM: 60,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "HATONUEVO_LA_GUAJIRA_HATONUEVO",
        label: "Hatonuevo / La Guajira / Hatonuevo",
        elevationM: 60,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LA_APARTADA_CORDOBA_LA_APARTADA",
        label: "La Apartada / Córdoba / La Apartada",
        elevationM: 60,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MANDE_CHOCO_MURINDO",
        label: "Mande / Chocó / Murindó",
        elevationM: 60,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MORALES_BOLIVAR_MORALES",
        label: "Morales / Bolívar / Morales",
        elevationM: 60,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUEBLO_NUEVO_CORDOBA_PUEBLO_NUEVO",
        label: "Pueblo Nuevo / Córdoba / Pueblo Nuevo",
        elevationM: 60,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUERTO_CLAVER_ANTIOQUIA_EL_BAGRE",
        label: "Puerto Claver / Antioquia / El Bagre",
        elevationM: 60,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "TIQUISIO_BOLIVAR_TIQUISIO",
        label: "Tiquisio / Bolívar / Tiquisio",
        elevationM: 60,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "BEBARAMA_CHOCO_MEDIO_ATRATO",
        label: "Bebaramá / Chocó / Medio Atrato",
        elevationM: 50,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "BOGADO_CHOCO_BOGADO",
        label: "Bogadó / Chocó / Bogadó",
        elevationM: 50,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "BOSCONIA_CESAR_BOSCONIA",
        label: "Bosconia / Cesar / Bosconia",
        elevationM: 50,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CAUCASIA_ANTIOQUIA_CAUCASIA",
        label: "Caucasia / Antioquia / Caucasia",
        elevationM: 50,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MANAURE_BOLIVAR_MAHATES",
        label: "Manaure / Bolívar / Mahates",
        elevationM: 50,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MARGENTO_ANTIOQUIA_CAUCASIA",
        label: "Margento / Antioquia / Caucasia",
        elevationM: 50,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MURINDO_ANTIOQUIA_MURINDO",
        label: "Murindó / Antioquia / Murindó",
        elevationM: 50,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "TUTUNENDO_CHOCO_QUIBDO",
        label: "Tutunendo / Chocó / Quibdó",
        elevationM: 50,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "UARPANA_LA_GUAJIRA_URIBIA",
        label: "Uarpana / La Guajira / Uribia",
        elevationM: 50,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "BARRANCAS_LA_GUAJIRA_BARRANCAS",
        label: "Barrancas / La Guajira / Barrancas",
        elevationM: 45,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LAS_BRISAS_CORDOBA_BELEN_DE_BAJIRA",
        label: "Las Brisas / Córdoba / Belén de Bajirá",
        elevationM: 45,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "BELEN_DE_BAJIRA_CHOCO_BELEN_DE_BAJIRA",
        label: "Belén de Bajirá / Chocó / Belén de Bajirá",
        elevationM: 40,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "COLOMBOY_SUCRE_SAN_MARCOS",
        label: "Colomboy / Sucre / San Marcos",
        elevationM: 40,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "FONSECA_LA_GUAJIRA_FONSECA",
        label: "Fonseca / La Guajira / Fonseca",
        elevationM: 40,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "KUSHEME_LA_GUAJIRA_URIBIA",
        label: "Kusheme / La Guajira / Uribia",
        elevationM: 40,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LA_MINA_LA_GUAJIRA_URIBIA",
        label: "La Mina / La Guajira / Uribia",
        elevationM: 40,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PAPAYAL_LA_GUAJIRA_MAICAO",
        label: "Papayal / La Guajira / Maicao",
        elevationM: 40,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PIYOHUREKA_LA_GUAJIRA_URIBIA",
        label: "Piyohureka / La Guajira / Uribia",
        elevationM: 40,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SAN_JACINTO_DEL_CAUCA_BOLIVAR_SAN_JACINTO_DEL_CAUCA",
        label: "San Jacinto del Cauca / Bolívar / San Jacinto del Cauca",
        elevationM: 40,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SANTA_INES_SUCRE_SAN_MARCOS",
        label: "Santa Inés / Sucre / San Marcos",
        elevationM: 40,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SINCE_SUCRE_SINCE",
        label: "Sincé / Sucre / Sincé",
        elevationM: 40,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SINCELEJITO_SUCRE_SINCELEJO",
        label: "Sincelejito / Sucre / Sincelejo",
        elevationM: 40,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "EL_CAUCHAL_SUCRE_SAN_MARCOS",
        label: "El Cauchal / Sucre / San Marcos",
        elevationM: 35,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MAJAGUAL_SUCRE_MAJAGUAL",
        label: "Majagual / Sucre / Majagual",
        elevationM: 35,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PORCHINA_LA_GUAJIRA_URIBIA",
        label: "Porchiná / La Guajira / Uribia",
        elevationM: 35,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SAN_MARCOS_SUCRE_SAN_MARCOS",
        label: "San Marcos / Sucre / San Marcos",
        elevationM: 35,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SAN_PEDRO_SUCRE_SAN_PEDRO",
        label: "San Pedro / Sucre / San Pedro",
        elevationM: 35,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "TAMALAMEQUE_CESAR_TAMALAMEQUE",
        label: "Tamalameque / Cesar / Tamalameque",
        elevationM: 35,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "AYAPEL_CORDOBA_AYAPEL",
        label: "Ayapel / Córdoba / Ayapel",
        elevationM: 30,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "EL_BANCO_MAGDALENA_EL_BANCO",
        label: "El Banco / Magdalena / El Banco",
        elevationM: 30,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "GUARANDA_SUCRE_GUARANDA",
        label: "Guaranda / Sucre / Guaranda",
        elevationM: 30,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LA_FLOR_DE_LA_GUAJIRA_LA_GUAJIRA_URIBIA",
        label: "La Flor de La Guajira / La Guajira / Uribia",
        elevationM: 30,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "NACAO_LA_GUAJIRA_URIBIA",
        label: "Nacao / La Guajira / Uribia",
        elevationM: 30,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "NECHI_ANTIOQUIA_NECHI",
        label: "Nechí / Antioquia / Nechí",
        elevationM: 30,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PINILLOS_BOLIVAR_PINILLOS",
        label: "Pinillos / Bolívar / Pinillos",
        elevationM: 30,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SIAPANA_LA_GUAJIRA_URIBIA",
        label: "Siapana / La Guajira / Uribia",
        elevationM: 30,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CHIMICHAGUA_CESAR_CHIMICHAGUA",
        label: "Chimichagua / Cesar / Chimichagua",
        elevationM: 25,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "GUAMAL_MAGDALENA_GUAMAL",
        label: "Guamal / Magdalena / Guamal",
        elevationM: 25,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SANTA_CRUZ_BOLIVAR_SANTA_CRUZ_DE_MOMPOX",
        label: "Santa Cruz / Bolívar / Santa Cruz de Mompox",
        elevationM: 25,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SANTA_CRUZ_DE_MOMPOX_BOLIVAR_MOMPOX",
        label: "Santa Cruz de Mompox / Bolívar / Mompox",
        elevationM: 25,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "LOS_CORDOBAS_CORDOBA_LOS_CORDOBAS",
        label: "Los Córdobas / Córdoba / Los Córdobas",
        elevationM: 20,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "SANTA_ANA_MAGDALENA_SANTA_ANA",
        label: "Santa Ana / Magdalena / Santa Ana",
        elevationM: 20,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "URIBIA_LA_GUAJIRA_URIBIA",
        label: "Uribia / La Guajira / Uribia",
        elevationM: 20,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "MAGANGUE_BOLIVAR_MAGANGUE",
        label: "Magangué / Bolívar / Magangué",
        elevationM: 15,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "DARIEN_CHOCO_BAHIA_SOLANO",
        label: "Darién / Chocó / Bahía Solano",
        elevationM: 10,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUERTO_LOPEZ_LA_GUAJIRA_URIBIA",
        label: "Puerto López / La Guajira / Uribia",
        elevationM: 10,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "BAHIA_HONDITA_LA_GUAJIRA_URIBIA",
        label: "Bahía Hondita / La Guajira / Uribia",
        elevationM: 5,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "CABO_DE_LA_VELA_LA_GUAJIRA_URIBIA",
        label: "Cabo de La Vela / La Guajira / Uribia",
        elevationM: 5,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUERTO_ESTRELLA_LA_GUAJIRA_URIBIA",
        label: "Puerto Estrella / La Guajira / Uribia",
        elevationM: 5,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PUNTA_ESPADA_LA_GUAJIRA_URIBIA",
        label: "Punta Espada / La Guajira / Uribia",
        elevationM: 5,
        wind: {
          "B.2.4": 125,
          "B.2.3": 100,
        },
      },
      {
        cityCode: "PARQUE_NACIONAL_NATURAL_SUMAPAZ_CUNDINAMARCA_CABRERA",
        label: "Parque Nacional Natural Sumapaz / Cundinamarca / Cabrera",
        elevationM: 3500,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "PARQUE_NACIONAL_NATURAL_SUMAPAZ_CUNDINAMARCA_CABRERA",
        label: "Parque Nacional Natural Sumapaz / Cundinamarca / Cabrera",
        elevationM: 3500,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "SILVIA_CAUCA_SILVIA",
        label: "Silvia / Cauca / Silvia",
        elevationM: 2800,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "YARUMAL_ANTIOQUIA_YARUMAL",
        label: "Yarumal / Antioquia / Yarumal",
        elevationM: 2300,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "RIONEGRO_ANTIOQUIA_RIONEGRO",
        label: "Rionegro / Antioquia / Rionegro",
        elevationM: 2100,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "COLOMBIA_HUILA_COLOMBIA",
        label: "Colombia / Huila / Colombia",
        elevationM: 1900,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "CALIBIO_CAUCA_POPAYAN",
        label: "Calibío / Cauca / Popayán",
        elevationM: 1800,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "COLOMBIA_VEREDA_HUILA_COLOMBIA",
        label: "Colombia (vereda) / Huila / Colombia",
        elevationM: 1800,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "TIMBIO_CAUCA_TIMBIO",
        label: "Timbío / Cauca / Timbío",
        elevationM: 1800,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "PIENDAMO_CAUCA_PIENDAMO",
        label: "Piendamó / Cauca / Piendamó",
        elevationM: 1760,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "POPAYAN_CAUCA_POPAYAN",
        label: "Popayán / Cauca / Popayán",
        elevationM: 1760,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "CALDAS_ANTIOQUIA_CALDAS",
        label: "Caldas / Antioquia / Caldas",
        elevationM: 1750,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "ROSAS_CAUCA_ROSAS",
        label: "Rosas / Cauca / Rosas",
        elevationM: 1750,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "TAMBO_CAUCA_EL_TAMBO",
        label: "Tambo / Cauca / El Tambo",
        elevationM: 1750,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "SAN_AGUSTIN_HUILA_SAN_AGUSTIN",
        label: "San Agustín / Huila / San Agustín",
        elevationM: 1730,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "EL_TAMBO_CAUCA_EL_TAMBO",
        label: "El Tambo / Cauca / El Tambo",
        elevationM: 1700,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "ALGECIRAS_HUILA_ALGECIRAS",
        label: "Algeciras / Huila / Algeciras",
        elevationM: 1600,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "OPORAPA_HUILA_OPORAPA",
        label: "Oporapa / Huila / Oporapa",
        elevationM: 1600,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "SUAZA_HUILA_SUAZA",
        label: "Suaza / Huila / Suaza",
        elevationM: 1600,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "BARBOSA_SANTANDER_BARBOSA",
        label: "Barbosa / Santander / Barbosa",
        elevationM: 1550,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "ITAGUI_ANTIOQUIA_ITAGUI",
        label: "Itagüí / Antioquia / Itagüí",
        elevationM: 1550,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "LIBORINA_ANTIOQUIA_LIBORINA",
        label: "Liborina / Antioquia / Liborina",
        elevationM: 1550,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "NATAGA_HUILA_NATAGA",
        label: "Nataga / Huila / Nátaga",
        elevationM: 1500,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "TESALIA_HUILA_TESALIA",
        label: "Tesalia / Huila / Tesalia",
        elevationM: 1500,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "MEDELLIN_ANTIOQUIA_MEDELLIN",
        label: "Medellín / Antioquia / Medellín",
        elevationM: 1495,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "BELLO_ANTIOQUIA_BELLO",
        label: "Bello / Antioquia / Bello",
        elevationM: 1430,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "ZULUAGA_HUILA_GARZON",
        label: "Zuluaga / Huila / Garzon",
        elevationM: 1400,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "LA_VEGA_CUNDINAMARCA_LA_VEGA",
        label: "La Vega / Cundinamarca / La Vega",
        elevationM: 1250,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "PARQUE_NACIONAL_NATURAL_CORDILLERA_DE_LOS_PICACHOS_CAQUETA_LA_MONTANITA",
        label: "Parque Nacional Natural Cordillera de los Picachos / Caquetá / La Montañita",
        elevationM: 1200,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "EL_BORDO_CAUCA_PATIA",
        label: "El Bordo / Cauca / Patía",
        elevationM: 1100,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "GUADALUPE_HUILA_GUADALUPE",
        label: "Guadalupe / Huila / Guadalupe",
        elevationM: 1100,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "TIMANA_HUILA_TIMANA",
        label: "Timaná / Huila / Timaná",
        elevationM: 1100,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "LA_PLATA_HUILA_LA_PLATA",
        label: "La Plata / Huila / La Plata",
        elevationM: 1000,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "BARRANCA_CALDAS_NEIRA",
        label: "Barranca / Caldas / Neira",
        elevationM: 900,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "MERCADERES_CAUCA_MERCADERES",
        label: "Mercaderes / Cauca / Mercaderes",
        elevationM: 900,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "GIGANTE_HUILA_GIGANTE",
        label: "Gigante / Huila / Gigante",
        elevationM: 890,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "GARZON_HUILA_GARZON",
        label: "Garzón / Huila / Garzón",
        elevationM: 860,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "AGRADO_HUILA_AGRADO",
        label: "Agrado / Huila / Agrado",
        elevationM: 850,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "MESETAS_META_MESETAS",
        label: "Mesetas / Meta / Mesetas",
        elevationM: 800,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "MOJARRAS_CAUCA_PATIA",
        label: "Mojarras / Cauca / Patía",
        elevationM: 750,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "PATIA_CAUCA_PATIA_EL_BORDO",
        label: "Patía / Cauca / Patía (El Bordo)",
        elevationM: 600,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "LEJANIAS_META_LEJANIAS",
        label: "Lejanías / Meta / Lejanías",
        elevationM: 550,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "MEDINA_CUNDINAMARCA_MEDINA",
        label: "Medina / Cundinamarca / Medina",
        elevationM: 550,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "GRANADA_META_GRANADA",
        label: "Granada / Meta / Granada",
        elevationM: 520,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "SANTA_FE_DE_ANTIOQUIA_ANTIOQUIA_SANTA_FE_DE_ANTIOQUIA",
        label: "Santa Fe de Antioquia / Antioquia / Santa Fe de Antioquia",
        elevationM: 500,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "VILLAVICENCIO_META_VILLAVICENCIO",
        label: "Villavicencio / Meta / Villavicencio",
        elevationM: 500,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "ACACIAS_META_ACACIAS",
        label: "Acacías / Meta / Acacías",
        elevationM: 498,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "CUMARAL_META_CUMARAL",
        label: "Cumaral / Meta / Cumaral",
        elevationM: 452,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "APIAY_META_VILLAVICENCIO",
        label: "Apiay / Meta / Villavicencio",
        elevationM: 430,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "SAN_JUAN_DE_ARAMA_META_SAN_JUAN_DE_ARAMA",
        label: "San Juan de Arama / Meta / San Juan de Arama",
        elevationM: 420,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "FUENTEDEORO_META_FUENTE_DE_ORO",
        label: "Fuentedeoro / Meta / Fuente de Oro",
        elevationM: 350,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "MONTERREY_CASANARE_MONTERREY",
        label: "Monterrey / Casanare / Monterrey",
        elevationM: 350,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "TAURAMENA_CASANARE_TAURAMENA",
        label: "Tauramena / Casanare / Tauramena",
        elevationM: 350,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "VILLANUEVA_CASANARE_VILLANUEVA",
        label: "Villanueva / Casanare / Villanueva",
        elevationM: 350,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "YOPAL_CASANARE_YOPAL",
        label: "Yopal / Casanare / Yopal",
        elevationM: 350,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "AGUAZUL_CASANARE_AGUAZUL",
        label: "Aguazul / Casanare / Aguazul",
        elevationM: 300,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "GUAMAL_META_GUAMAL",
        label: "Guamal / Meta / Guamal",
        elevationM: 300,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "SAN_JACINTO_BOLIVAR_SAN_JACINTO",
        label: "San Jacinto / Bolívar / San Jacinto",
        elevationM: 300,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "OVEJAS_SUCRE_OVEJAS",
        label: "Ovejas / Sucre / Ovejas",
        elevationM: 265,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "PARATEBUENO_CUNDINAMARCA_PARATEBUENO",
        label: "Paratebueno / Cundinamarca / Paratebueno",
        elevationM: 260,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "MORICHAL_CASANARE_YOPAL",
        label: "Morichal / Casanare / Yopal",
        elevationM: 250,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "EL_CARMEN_DE_BOLIVAR_BOLIVAR_EL_CARMEN_DE_BOLIVAR",
        label: "El Carmen de Bolívar / Bolívar / El Carmen de Bolívar",
        elevationM: 175,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "EL_DIVISO_NARINO_BARBACOAS",
        label: "El Diviso / Nariño / Barbacoas",
        elevationM: 120,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "SAN_JUAN_NEPOMUCENO_BOLIVAR_SAN_JUAN_NEPOMUCENO",
        label: "San Juan Nepomuceno / Bolívar / San Juan Nepomuceno",
        elevationM: 120,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "CACAYAL_NARINO_BARBACOAS",
        label: "Cacayal / Nariño / Barbacoas",
        elevationM: 100,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "SAN_BASILIO_DEL_PALENQUE_BOLIVAR_MAHATES",
        label: "San Basilio del Palenque / Bolívar / Mahates",
        elevationM: 100,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "CHIVOLO_MAGDALENA_CHIVOLO",
        label: "Chivolo / Magdalena / Chivolo",
        elevationM: 80,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "PIVIJAY_MAGDALENA_PIVIJAY",
        label: "Pivijay / Magdalena / Pivijay",
        elevationM: 40,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "FUNDACION_MAGDALENA_FUNDACION",
        label: "Fundación / Magdalena / Fundación",
        elevationM: 30,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "MARIA_LA_BAJA_BOLIVAR_MARIA_LA_BAJA",
        label: "María La Baja / Bolívar / María La Baja",
        elevationM: 30,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "PLATO_MAGDALENA_PLATO",
        label: "Plato / Magdalena / Plato",
        elevationM: 25,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "TOLU_VIEJO_SUCRE_TOLU_VIEJO",
        label: "Tolú Viejo / Sucre / Tolú Viejo",
        elevationM: 25,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "MANAURE_LA_GUAJIRA_MANAURE",
        label: "Manaure / La Guajira / Manaure",
        elevationM: 20,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "MINGUEO_LA_GUAJIRA_DIBULLA",
        label: "Mingueo / La Guajira / Dibulla",
        elevationM: 20,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "TENERIFE_MAGDALENA_TENERIFE",
        label: "Tenerife / Magdalena / Tenerife",
        elevationM: 20,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "ZAMBRANO_BOLIVAR_ZAMBRANO",
        label: "Zambrano / Bolívar / Zambrano",
        elevationM: 20,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "RANCHERIA_LA_GUAJIRA_URIBIA",
        label: "Ranchería / La Guajira / Uribia",
        elevationM: 15,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "SANTA_CRUZ_DE_LORICA_CORDOBA_SANTA_CRUZ_DE_LORICA",
        label: "Santa Cruz de Lorica / Córdoba / Santa Cruz de Lorica",
        elevationM: 12,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "CALAMAR_BOLIVAR_CALAMAR",
        label: "Calamar / Bolívar / Calamar",
        elevationM: 10,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "CAMARONES_LA_GUAJIRA_RIOHACHA",
        label: "Camarones / La Guajira / Riohacha",
        elevationM: 10,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "DIBULLA_LA_GUAJIRA_DIBULLA",
        label: "Dibulla / La Guajira / Dibulla",
        elevationM: 10,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "PALOMINO_LA_GUAJIRA_DIBULLA",
        label: "Palomino / La Guajira / Dibulla",
        elevationM: 10,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "RIOHACHA_LA_GUAJIRA_RIOHACHA",
        label: "Riohacha / La Guajira / Riohacha",
        elevationM: 10,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "SAN_ONOFRE_SUCRE_SAN_ONOFRE",
        label: "San Onofre / Sucre / San Onofre",
        elevationM: 10,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "SANTA_CRUZ_DE_LORICA_SUCRE_LORICA_COSTERO",
        label: "Santa Cruz de Lorica / Sucre / Lorica costero",
        elevationM: 8,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "CAMPO_DE_LA_CRUZ_ATLANTICO_CAMPO_DE_LA_CRUZ",
        label: "Campo de la Cruz / Atlántico / Campo de la Cruz",
        elevationM: 5,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "ISLA_FUERTE_CORDOBA_SAN_BERNARDO_DEL_VIENTO_JURISDICCION",
        label: "Isla Fuerte / Córdoba / San Bernardo del Viento (jurisdicción)",
        elevationM: 5,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "ISLA_PALMA_BOLIVAR_SAN_BERNARDO_DEL_VIENTO_ARCHIPIELAGO_DE_SAN_BERNARDO",
        label: "Isla Palma / Bolívar / San Bernardo del Viento / Archipiélago de San Bernardo",
        elevationM: 5,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "MANATI_ATLANTICO_MANATI",
        label: "Manatí / Atlántico / Manatí",
        elevationM: 5,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "MAYAPO_LA_GUAJIRA_URIBIA",
        label: "Mayapo / La Guajira / Uribia",
        elevationM: 5,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "MONITOS_CORDOBA_MONITOS",
        label: "Moñitos / Córdoba / Moñitos",
        elevationM: 5,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "PUNTA_LA_VELA_LA_GUAJIRA_URIBIA",
        label: "Punta La Vela / La Guajira / Uribia",
        elevationM: 5,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "SAN_BERNARDO_DEL_VIENTO_CORDOBA_SAN_BERNARDO_DEL_VIENTO",
        label: "San Bernardo del Viento / Córdoba / San Bernardo del Viento",
        elevationM: 5,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "SANTIAGO_DE_TOLU_SUCRE_SANTIAGO_DE_TOLU",
        label: "Santiago de Tolú / Sucre / Santiago de Tolú",
        elevationM: 5,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "ISLA_MUCURA_BOLIVAR_SAN_BERNARDO_DEL_VIENTO_ARCHIPIELAGO_DE_SAN_BERNARDO",
        label: "Isla Múcura / Bolívar / San Bernardo del Viento / Archipiélago de San Bernardo",
        elevationM: 4,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "ISLA_TINTIPAN_BOLIVAR_SAN_BERNARDO_DEL_VIENTO_ARCHIPIELAGO_DE_SAN_BERNARDO",
        label: "Isla Tintipán / Bolívar / San Bernardo del Viento / Archipiélago de San Bernardo",
        elevationM: 4,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "COVENAS_SUCRE_COVENAS",
        label: "Coveñas / Sucre / Coveñas",
        elevationM: 3,
        wind: {
          "B.2.4": 150,
          "B.2.3": 120,
        },
      },
      {
        cityCode: "USIACURI_ATLANTICO_USIACURI",
        label: "Usiacurí / Atlántico / Usiacurí",
        elevationM: 110,
        wind: {
          "B.2.4": 165,
          "B.2.3": 130,
        },
      },
      {
        cityCode: "BARANOA_ATLANTICO_BARANOA",
        label: "Baranoa / Atlántico / Baranoa",
        elevationM: 90,
        wind: {
          "B.2.4": 165,
          "B.2.3": 130,
        },
      },
      {
        cityCode: "SABANALARGA_ATLANTICO_SABANALARGA",
        label: "Sabanalarga / Atlántico / Sabanalarga",
        elevationM: 90,
        wind: {
          "B.2.4": 165,
          "B.2.3": 130,
        },
      },
      {
        cityCode: "ARJONA_BOLIVAR_ARJONA",
        label: "Arjona / Bolívar / Arjona",
        elevationM: 50,
        wind: {
          "B.2.4": 165,
          "B.2.3": 130,
        },
      },
      {
        cityCode: "BAYUCA_MAGDALENA_CIENAGA",
        label: "Bayuca / Magdalena / Ciénaga",
        elevationM: 40,
        wind: {
          "B.2.4": 165,
          "B.2.3": 130,
        },
      },
      {
        cityCode: "ARACATACA_MAGDALENA_ARACATACA",
        label: "Aracataca / Magdalena / Aracataca",
        elevationM: 35,
        wind: {
          "B.2.4": 165,
          "B.2.3": 130,
        },
      },
      {
        cityCode: "GUACAMAYAL_MAGDALENA_ZONA_BANANERA",
        label: "Guacamayal / Magdalena / Zona Bananera",
        elevationM: 20,
        wind: {
          "B.2.4": 165,
          "B.2.3": 130,
        },
      },
      {
        cityCode: "TUCURINCA_MAGDALENA_ZONA_BANANERA",
        label: "Tucurinca / Magdalena / Zona Bananera",
        elevationM: 20,
        wind: {
          "B.2.4": 165,
          "B.2.3": 130,
        },
      },
      {
        cityCode: "GAIRA_MAGDALENA_SANTA_MARTA",
        label: "Gaira / Magdalena / Santa Marta",
        elevationM: 15,
        wind: {
          "B.2.4": 165,
          "B.2.3": 130,
        },
      },
      {
        cityCode: "SANTA_MARTA_GAIRA_MAGDALENA_SANTA_MARTA",
        label: "Santa Marta (Gaira) / Magdalena / Santa Marta",
        elevationM: 15,
        wind: {
          "B.2.4": 165,
          "B.2.3": 130,
        },
      },
      {
        cityCode: "BARRANQUILLA_ATLANTICO_BARRANQUILLA",
        label: "Barranquilla / Atlántico / Barranquilla",
        elevationM: 10,
        wind: {
          "B.2.4": 165,
          "B.2.3": 130,
        },
      },
      {
        cityCode: "PALMAR_DE_VARELA_ATLANTICO_PALMAR_DE_VARELA",
        label: "Palmar de Varela / Atlántico / Palmar de Varela",
        elevationM: 8,
        wind: {
          "B.2.4": 165,
          "B.2.3": 130,
        },
      },
      {
        cityCode: "PONEDERA_ATLANTICO_PONEDERA",
        label: "Ponedera / Atlántico / Ponedera",
        elevationM: 6,
        wind: {
          "B.2.4": 165,
          "B.2.3": 130,
        },
      },
      {
        cityCode: "BAHIA_CONCHA_MAGDALENA_SANTA_MARTA",
        label: "Bahía Concha / Magdalena / Santa Marta",
        elevationM: 5,
        wind: {
          "B.2.4": 165,
          "B.2.3": 130,
        },
      },
      {
        cityCode: "BARU_BOLIVAR_CARTAGENA_DE_INDIAS",
        label: "Barú / Bolívar / Cartagena de Indias",
        elevationM: 5,
        wind: {
          "B.2.4": 165,
          "B.2.3": 130,
        },
      },
      {
        cityCode: "CARTAGENA_DE_INDIAS_BOLIVAR_CARTAGENA_DE_INDIAS",
        label: "Cartagena de Indias / Bolívar / Cartagena de Indias",
        elevationM: 5,
        wind: {
          "B.2.4": 165,
          "B.2.3": 130,
        },
      },
      {
        cityCode: "CIENAGA_MAGDALENA_CIENAGA",
        label: "Ciénaga / Magdalena / Ciénaga",
        elevationM: 5,
        wind: {
          "B.2.4": 165,
          "B.2.3": 130,
        },
      },
      {
        cityCode: "LA_BOQUILLA_BOLIVAR_CARTAGENA_DE_INDIAS",
        label: "La Boquilla / Bolívar / Cartagena de Indias",
        elevationM: 5,
        wind: {
          "B.2.4": 165,
          "B.2.3": 130,
        },
      },
      {
        cityCode: "MALAMBO_ATLANTICO_MALAMBO",
        label: "Malambo / Atlántico / Malambo",
        elevationM: 5,
        wind: {
          "B.2.4": 165,
          "B.2.3": 130,
        },
      },
      {
        cityCode: "REPELON_ATLANTICO_REPELON",
        label: "Repelón / Atlántico / Repelón",
        elevationM: 5,
        wind: {
          "B.2.4": 165,
          "B.2.3": 130,
        },
      },
      {
        cityCode: "SANTA_VERONICA_ATLANTICO_JUAN_DE_ACOSTA",
        label: "Santa Verónica / Atlántico / Juan de Acosta",
        elevationM: 5,
        wind: {
          "B.2.4": 165,
          "B.2.3": 130,
        },
      },
      {
        cityCode: "SOLEDAD_ATLANTICO_SOLEDAD",
        label: "Soledad / Atlántico / Soledad",
        elevationM: 5,
        wind: {
          "B.2.4": 165,
          "B.2.3": 130,
        },
      },
      {
        cityCode: "ISLA_TIERRA_BOMBA_BOLIVAR_CARTAGENA_DE_INDIAS",
        label: "Isla Tierra Bomba / Bolívar / Cartagena de Indias",
        elevationM: 4,
        wind: {
          "B.2.4": 165,
          "B.2.3": 130,
        },
      },
      {
        cityCode: "ISLA_EL_PUEBLITO_BOLIVAR_CARTAGENA_DE_INDIAS_ISLAS_DEL_ROSARIO",
        label: "Isla El Pueblito / Bolívar / Cartagena de Indias (Islas del Rosario)",
        elevationM: 3,
        wind: {
          "B.2.4": 165,
          "B.2.3": 130,
        },
      },
      {
        cityCode: "ISLA_DE_SAN_ANDRES",
        label: "Isla de san Andres",
        elevationM: 0,
        wind: {
          "B.2.4": 200,
          "B.2.3": 160,
        },
      },
      {
        cityCode: "ISLA_DE_PROVIDENCIA",
        label: "Isla de providencia",
        elevationM: 0,
        wind: {
          "B.2.4": 220,
          "B.2.3": 175,
        },
      },
      {
        cityCode: "ISLA_DE_SANTA_CATALINA",
        label: "Isla de santa catalina",
        elevationM: 0,
        wind: {
          "B.2.4": 220,
          "B.2.3": 175,
        },
      },
    ],
  },
];

export const getGeoCountries = () =>
  GEO_DESIGN_DATA.map((c) => ({
    code: c.countryCode,
    label: c.label,
  }));

export const getGeoCitiesByCountry = (countryCode: string) => {
  const country = GEO_DESIGN_DATA.find((c) => c.countryCode === countryCode);
  if (!country) return [];
  return country.cities.map((city) => ({
    code: city.cityCode,
    label: city.label,
  }));
};

export const getCityDesignRecord = (
  countryCode: string,
  cityCode: string
): CityDesignRecord | undefined => {
  const country = GEO_DESIGN_DATA.find((c) => c.countryCode === countryCode);
  if (!country) return undefined;
  return country.cities.find((city) => city.cityCode === cityCode);
};

export const getWindSpeedForCity = (
  countryCode: string,
  cityCode: string,
  category: WindSpeedCategory
): number | null => {
  const record = getCityDesignRecord(countryCode, cityCode);
  if (!record) return null;
  return record.wind[category] ?? null;
};
