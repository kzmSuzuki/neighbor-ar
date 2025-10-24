// アプリケーションの主要な機能を実装するJavaScript

document.addEventListener("DOMContentLoaded", function () {
  // 要素の取得
  const loadingScreen = document.getElementById("loading-screen");
  const instructions = document.getElementById("instructions");
  const closeInstructionsBtn = document.getElementById("close-instructions");
  const toggleModelBtn = document.getElementById("toggle-model");
  const tapTooltip = document.getElementById("tap-tooltip");

  // ARシーンが読み込まれたらローディング画面を非表示
  const scene = document.querySelector("a-scene");
  scene.addEventListener("loaded", function () {
    setTimeout(() => {
      loadingScreen.classList.add("hidden");
    }, 1000);
  });

  // カメラアクセスエラー時の処理
  scene.addEventListener("camera-error", function () {
    alert(
      "カメラへのアクセスができませんでした。ブラウザの設定を確認してください。"
    );
  });

  // すべてのマーカーにイベントリスナーを追加
  const markers = document.querySelectorAll(".ar-marker");
  markers.forEach(function (marker) {
    // マーカーが検出されたときの処理
    marker.addEventListener("markerFound", function () {
      console.log("マーカーを検出しました");
      tapTooltip.classList.add("show");
    });

    // マーカーを見失ったときの処理
    marker.addEventListener("markerLost", function () {
      console.log("マーカーを見失いました");
      tapTooltip.classList.remove("show");
    });
  });

  // 説明を閉じるボタンの処理
  if (closeInstructionsBtn) {
    closeInstructionsBtn.addEventListener("click", function () {
      instructions.classList.add("hidden");
    });
  }

  // オフライン検出
  window.addEventListener("online", function () {
    console.log("オンラインに戻りました");
  });

  window.addEventListener("offline", function () {
    console.log("オフラインになりました");
    // オフラインモードの通知を表示するなどの処理を追加可能
  });
});
