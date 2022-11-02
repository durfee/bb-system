import { TokenGroup } from "../types";

export const colors = {
	yellowstoneMagic: {
		text: "#FEB2B4",
		primary: "#E02D51",
		accentDark: "#92001C",
	},
	kansasCityBreathMints: {
		text: "#BCEDC1",
		primary: "#3FD068",
		accentDark: "#007E1C",
	},
	tokyoLift: {
		text: "#FFBAEA",
		primary: "#FF33CC",
		accentDark: "#B5008A",
	},
	atlantisGeorgias: {
		text: "#B2E4D2",
		primary: "#00BA94",
		accentDark: "#007150",
	},
	miamiDale: {
		text: "#E9B4F1",
		primary: "#BA3AD6",
		accentDark: "#780096",
	},
	newYorkMillennials: {
		text: "#FFEAEE",
		primary: "#FFCBD6",
		accentDark: "#9D6F79",
	},
	seattleGarages: {
		text: "#A5B1C9",
		primary: "#0C4A7C",
		accentDark: "#002F5E",
	},
	dallasSteaks: {
		text: "#BBC9C7",
		primary: "#B5B7B7",
		accentDark: "#3C4947",
	},
	chicagoFirefighters: {
		text: "#FBB5AB",
		primary: "#D93C3B",
		accentDark: "#930000",
	},
	baltimoreCrabs: {
		text: "#D4C2C4",
		primary: "#946C72",
		accentDark: "#653A41",
	},
	sanFranciscoLovers: {
		text: "#FFB1BE",
		primary: "#BB566C",
		accentDark: "#82213C",
	},
	canadaMoistTalkers: {
		text: "#FBFDFE",
		primary: "#CAECF1",
		accentDark: "#90BDC3",
	},
	bostonFlowers: {
		text: "#FCEDFF",
		primary: "#F8D3FF",
		accentDark: "#DA19FF",
	},
	hadesTigers: {
		text: "#DDB1A0",
		primary: "#9A4323",
		accentDark: "#6C1B00",
	},
	hawaiiFridays: {
		text: "#C5FFCF",
		primary: "#00FF66",
		accentDark: "#00C54F",
	},
	phillyPies: {
		text: "#B9E5DE",
		primary: "#38BEAF",
		accentDark: "#007266",
	},
	coreMechanics: {
		text: "#F8B49D",
		primary: "#CE3E16",
		accentDark: "#910000",
	},
	charlestonShoeThieves: {
		text: "#FFEBAB",
		primary: "#FFD000",
		accentDark: "#967600",
	},
	mexicoCityWildWings: {
		text: "#F7D2C9",
		primary: "#EB713D",
		accentDark: "#B6572F",
	},
	ohioWorms: {
		text: "#D3C5A6",
		primary: "#867548",
		accentDark: "#524521",
	},
	breckenridgeJazzHands: {
		text: "#8BCEF9",
		primary: "#217FA9",
		accentDark: "#144B65",
	},
	hellmouthSunbeams: {
		text: "#FFF8D1",
		primary: "#FFF08C",
		accentDark: "#928929",
	},
	houstonSpies: {
		text: "#DDDAE3",
		primary: "#9F95B4",
		accentDark: "#7B738B",
	},
	LATacos: {
		text: "#CFBCFF",
		primary: "#924BFF",
		accentDark: "#6100BD",
	},
	greyFlat: {
		textLight: "#f9fafb",
		textMuted: "#d0d5dd",
		accentMuted: "##828799",
		accentDark: "#3D414C",
		background: "#0A0B0D"
	},
	greyAlpha: {
		0: "rgba(255,255,255, 0)",
		7: "rgba(255,255,255, 0.07)",
		12: "rgba(255,255,255, 0.12)",
		17: "rgba(255,255,255, 0.17)",
		24: "rgba(255,255,255, 0.24)",
		40: "rgba(255,255,255, 0.40)",
	}
}

export type ColorsTokenGroup = TokenGroup<typeof colors>;
export type ColorsTokenGroupName = keyof ColorsTokenGroup;
