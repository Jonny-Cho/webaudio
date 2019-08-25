import AudioAnalyzer from './AudioAnalyzer.js';

(function(){
    const inputDOM = document.getElementById('audio-uploader');
    const playButtonDOM = document.getElementById('play-button');
    const stopButtonDOM = document.getElementById('stop-button');
    
    playButtonDOM.onclick = e => {
    	AudioAnalyzer.play();
    }
    
    stopButtonDOM.onclick = e => {
    	AudioAnalyzer.stop();
    }
    
    inputDOM.onchange = e => {
        const file = e.currentTarget.files[0];
        if(file){
            AudioAnalyzer.reset();
            const reader = new FileReader();
            reader.onload = e => {
            	AudioAnalyzer.setAudio(e.target.result);
            	playButtonDOM.style.display = 'inline-block';
            };
            reader.readAsArrayBuffer(file);
        }
    }
    
	document.getElementById('master-gain-controller').oninput = e => {
		const gain = parseInt(e.target.value) / 100;
		AudioAnalyzer.setGain(gain * 2);
	};
})();