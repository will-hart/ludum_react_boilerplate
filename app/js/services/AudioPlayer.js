const audioSpriteMp3 = require("../../assets/audio/audio_sprite.mp3");
const audioSpriteOgg = require("../../assets/audio/audio_sprite.ogg");

const Howl = require("howler").Howl;

let instance = null;


class AudioPlayer {
	constructor() {

		if (!instance) {
			instance = this;
		}

		this.sprite = new Howl({
			urls: [
				audioSpriteOgg,
				audioSpriteMp3
			],
			sprite: {
				thump: [0, 747],
				toggleswitch: [747, 182],
				rotaryswitch: [966, 98],
				computerstart: [1129, 295]
			}
		});

		return instance;
	}

	play(item) {
		this.sprite.play(item);
	}
}

export default AudioPlayer;
