<script>
  function openTabFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        const tab = urlParams.get('tab');
        if (tab) {
            document.querySelector(`button[value="${tab}"]`).click();
        }
    }

    document.addEventListener('DOMContentLoaded', openTabFromUrl);
</script>
