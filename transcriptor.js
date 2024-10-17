async function transcribir() {
    const audioFile = document.getElementById('audio-file').files[0];
    if (!audioFile) {
        alert('Por favor, selecciona un archivo de audio.');
        return;
    }

    const apiKey = 'sk-geQfDqPP4799IvgvgbiCVKON5V4aihxylHMhAnVmTLT3BlbkFJcSPdBC3fSRz3CC2KOz1_bWqg1eq9A182tcwGsl_usA'; // Reemplaza con tu API Key
    const formData = new FormData();
    formData.append('file', audioFile);
    formData.append('model', 'whisper-1');

    try {
        const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`
            },
            body: formData
        });

        if (!response.ok) {
            throw new Error('Error al transcribir el audio');
        }

        const data = await response.json();
        document.getElementById('resultado').innerText = data.text;
    } catch (error) {
        console.error('Error:', error);
        alert('Ocurrió un error al transcribir el audio. Por favor, revisa la consola para más detalles.');
    }
}
