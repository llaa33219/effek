(function() {
    // 변환에 사용할 특수 기호 (원본 그대로 사용)
    const underlineSymbol       = "­͟";
    const strikethroughSymbol   = "­̶";
    const overlineSymbol        = "­͞";
    const additionalSymbol      = "­̸";
    const accentLineSymbol      = "­̼"; // 기존 extraSymbol2
    const shadowLineSymbol      = "­̭"; // 기존 extraSymbol3
    const overbarSymbol         = "­̅"; // 기존 extraSymbol4
    const tildeSymbol           = "­͂"; // 기존 extraSymbol5
    const ligatureTieSymbol     = "­͡"; // 기존 extraSymbol6
    const connectorSymbol       = "­͠"; // 기존 extraSymbol7
    const diacriticDotSymbol    = "­̤"; // 기존 extraSymbol8
    const doubleOverlaySymbol   = "­͢"; // 기존 extraSymbol9
    const squareEnclosureSymbol = "⃞";  // 기존 extraSymbol10
    const circleEnclosureSymbol = "⃝";  // 기존 extraSymbol11

    // 선택한 텍스트에 밑줄 효과(underlineSymbol 추가) 적용 함수
    function transformUnderline(text) {
      let result = "";
      for (let i = 0; i < text.length; i++) {
        result += underlineSymbol + text[i];
      }
      return result;
    }

    // 선택한 텍스트에 취소선 효과(strikethroughSymbol 추가) 적용 함수
    // 문자 맨 앞, 중간, 맨 뒤에 모두 추가
    function transformStrikethrough(text) {
      let result = strikethroughSymbol;
      for (let i = 0; i < text.length; i++) {
        result += text[i] + strikethroughSymbol;
      }
      return result;
    }
    
    // 선택한 텍스트에 오버라인 효과(overlineSymbol 추가) 적용 함수
    function transformOverline(text) {
      let result = "";
      for (let i = 0; i < text.length; i++) {
        result += overlineSymbol + text[i];
      }
      return result;
    }
    
    // 선택한 텍스트에 추가선 효과(additionalSymbol 추가) 적용 함수
    // 이제 문자 맨 앞, 맨 뒤, 그리고 문자 사이에 모두 추가함
    function transformAdditional(text) {
      let result = additionalSymbol;
      for (let i = 0; i < text.length; i++) {
        result += text[i] + additionalSymbol;
      }
      return result;
    }
    
    // 선택한 텍스트에 엑센트 라인 효과(accentLineSymbol 추가) 적용 함수
    function transformAccentLine(text) {
      let result = "";
      for (let i = 0; i < text.length; i++) {
        result += accentLineSymbol + text[i];
      }
      return result;
    }
    
    // 선택한 텍스트에 쉐도우 라인 효과(shadowLineSymbol 추가) 적용 함수
    function transformShadowLine(text) {
      let result = "";
      for (let i = 0; i < text.length; i++) {
        result += shadowLineSymbol + text[i];
      }
      return result;
    }
    
    // 선택한 텍스트에 오버바 효과(overbarSymbol 추가) 적용 함수
    function transformOverbar(text) {
      let result = "";
      for (let i = 0; i < text.length; i++) {
        result += overbarSymbol + text[i];
      }
      return result;
    }
    
    // 선택한 텍스트에 틸드 효과(tildeSymbol 추가) 적용 함수
    function transformTilde(text) {
      let result = "";
      for (let i = 0; i < text.length; i++) {
        result += tildeSymbol + text[i];
      }
      return result;
    }
    
    // 선택한 텍스트에 리게이처 타이 효과(ligatureTieSymbol 추가) 적용 함수
    function transformLigatureTie(text) {
      let result = "";
      for (let i = 0; i < text.length; i++) {
        result += ligatureTieSymbol + text[i];
      }
      return result;
    }
    
    // 선택한 텍스트에 커넥터 효과(connectorSymbol 추가) 적용 함수
    function transformConnector(text) {
      let result = "";
      for (let i = 0; i < text.length; i++) {
        result += connectorSymbol + text[i];
      }
      return result;
    }
    
    // 선택한 텍스트에 디아크리틱 닷 효과(diacriticDotSymbol 추가) 적용 함수
    // 문자 맨 앞, 중간, 맨 뒤에 모두 추가
    function transformDiacriticDot(text) {
      let result = diacriticDotSymbol;
      for (let i = 0; i < text.length; i++) {
        result += text[i] + diacriticDotSymbol;
      }
      return result;
    }
    
    // 선택한 텍스트에 더블 오버레이 효과(doubleOverlaySymbol 추가) 적용 함수
    function transformDoubleOverlay(text) {
      let result = "";
      for (let i = 0; i < text.length; i++) {
        result += doubleOverlaySymbol + text[i];
      }
      return result;
    }
    
    // 선택한 텍스트에 스퀘어 인클로저 효과(squareEnclosureSymbol 추가) 적용 함수 (문자 뒤와 문자 사이에 추가)
    function transformSquareEnclosure(text) {
      let result = "";
      for (let i = 0; i < text.length; i++) {
        result += text[i] + squareEnclosureSymbol;
      }
      return result;
    }
    
    // 선택한 텍스트에 서클 인클로저 효과(circleEnclosureSymbol 추가) 적용 함수 (문자 뒤와 문자 사이에 추가)
    function transformCircleEnclosure(text) {
      let result = "";
      for (let i = 0; i < text.length; i++) {
        result += text[i] + circleEnclosureSymbol;
      }
      return result;
    }
    
    // 버튼에 공통 스타일 적용 함수 (버튼 크기, 패딩, 테두리 등)
    function applyButtonStyle(btn) {
      btn.style.cursor = "pointer";
      btn.style.padding = "5px 10px";
      btn.style.fontSize = "18px";
      btn.style.border = "1px solid #88888888";
      btn.style.borderRadius = "4px";
      btn.style.backgroundColor = "#fefefe11";
      btn.style.transition = "all 0.3s ease";
      btn.style.outline = "none";
      btn.addEventListener("mouseover", function() {
        btn.style.backgroundColor = "#bbbbbb33";
      });
      btn.addEventListener("mouseout", function() {
        btn.style.backgroundColor = "#fefefe11";
      });
    }
  
    // 버튼들을 추가하는 함수 (동적 생성된 컨테이너에도 적용)
    function addButtons(container) {
      // 해당 컨테이너에 이미 버튼이 추가되어 있으면 중복 추가하지 않음
      if (container.querySelector("#customTextEffectButtons")) return;
      const btnContainer = document.createElement("div");
      btnContainer.id = "customTextEffectButtons";
      btnContainer.style.marginTop = "10px";
      btnContainer.style.display = "flex";
      btnContainer.style.gap = "5px";
  
      // 밑줄 버튼 (아이콘: 밑줄 처리된 A)
      const underlineBtn = document.createElement("button");
      underlineBtn.innerHTML = '<span>­͟가</span>';
      applyButtonStyle(underlineBtn);
  
      // 취소선 버튼 (아이콘: 취소선 처리된 A)
      const strikethroughBtn = document.createElement("button");
      strikethroughBtn.innerHTML = '<span>̶가­̶</span>';
      applyButtonStyle(strikethroughBtn);
      
      // 오버라인 버튼 (아이콘: 오버라인 처리된 A)
      const overlineBtn = document.createElement("button");
      overlineBtn.innerHTML = '<span>­͞가</span>';
      applyButtonStyle(overlineBtn);
      
      // 슬래시 버튼 (아이콘: /)
      const additionalBtn = document.createElement("button");
      additionalBtn.innerHTML = '<span style="font-size: 18px;">­̸가­̸</span>';
      applyButtonStyle(additionalBtn);
      
      // 약한 강조 버튼 (아이콘: 밑에 점선 처리된 A)
      const extraBtn = document.createElement("button");
      extraBtn.innerHTML = '<span>­̼가­̼</span>';
      applyButtonStyle(extraBtn);
      
      // 문법 오류 버튼 (아이콘: 그림자 효과 A)
      const extraBtn2 = document.createElement("button");
      extraBtn2.innerHTML = '<span>­̭가­̭</span>';
      applyButtonStyle(extraBtn2);
      
      // 오버라인2 버튼 (아이콘: 상단에 선이 있는 A)
      const extraBtn3 = document.createElement("button");
      extraBtn3.innerHTML = '<span>­̅가</span>';
      applyButtonStyle(extraBtn3);
      
      // 틸드 버튼 (아이콘: ~)
      const extraBtn4 = document.createElement("button");
      extraBtn4.innerHTML = '<span style="font-size: 18px;">­͂가</span>';
      applyButtonStyle(extraBtn4);
      
      // 오버브레이스 버튼 (아이콘: ligature tie 심볼)
      const extraBtn5 = document.createElement("button");
      extraBtn5.innerHTML = '<span style="font-size: 18px;">­͡가</span>';
      applyButtonStyle(extraBtn5);
      
      // 거친 오버라인 버튼 (아이콘: 체인 모양 🔗)
      const extraBtn6 = document.createElement("button");
      extraBtn6.innerHTML = '<span style="font-size: 18px;">­͠가</span>';
      applyButtonStyle(extraBtn6);
      
      // 작은 점 버튼 (아이콘: •)
      const extraBtn7 = document.createElement("button");
      extraBtn7.innerHTML = '<span style="font-size: 18px;">­̤가</span>';
      applyButtonStyle(extraBtn7);
      
      // 더블 오버레이 버튼 (아이콘: double overlay 심볼)
      const extraBtn8 = document.createElement("button");
      extraBtn8.innerHTML = '<span style="font-size: 18px;">­͢가</span>';
      applyButtonStyle(extraBtn8);
      
      // 박스 문자 버튼 (아이콘: A에 박스 표시)
      const extraBtn9 = document.createElement("button");
      extraBtn9.innerHTML = '<span>가⃞</span>';
      applyButtonStyle(extraBtn9);
      
      // 원형 문자 버튼 (아이콘: A에 원 표시)
      const extraBtn10 = document.createElement("button");
      extraBtn10.innerHTML = '<span>가⃝</span>';
      applyButtonStyle(extraBtn10);
  
      // 밑줄 버튼 클릭 이벤트
      underlineBtn.addEventListener("click", () => {
        const textarea = container.querySelector("textarea");
        if (!textarea) return;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        if (start === end) return;
        const selectedText = textarea.value.substring(start, end);
        const transformed = transformUnderline(selectedText);
        textarea.value = textarea.value.substring(0, start) + transformed + textarea.value.substring(end);
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
      });
  
      // 취소선 버튼 클릭 이벤트
      strikethroughBtn.addEventListener("click", () => {
        const textarea = container.querySelector("textarea");
        if (!textarea) return;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        if (start === end) return;
        const selectedText = textarea.value.substring(start, end);
        const transformed = transformStrikethrough(selectedText);
        textarea.value = textarea.value.substring(0, start) + transformed + textarea.value.substring(end);
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
      });
      
      // 오버라인 버튼 클릭 이벤트
      overlineBtn.addEventListener("click", () => {
        const textarea = container.querySelector("textarea");
        if (!textarea) return;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        if (start === end) return;
        const selectedText = textarea.value.substring(start, end);
        const transformed = transformOverline(selectedText);
        textarea.value = textarea.value.substring(0, start) + transformed + textarea.value.substring(end);
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
      });
      
      // 추가선 버튼 클릭 이벤트
      additionalBtn.addEventListener("click", () => {
        const textarea = container.querySelector("textarea");
        if (!textarea) return;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        if (start === end) return;
        const selectedText = textarea.value.substring(start, end);
        const transformed = transformAdditional(selectedText);
        textarea.value = textarea.value.substring(0, start) + transformed + textarea.value.substring(end);
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
      });
      
      // 엑센트 선 버튼 클릭 이벤트
      extraBtn.addEventListener("click", () => {
        const textarea = container.querySelector("textarea");
        if (!textarea) return;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        if (start === end) return;
        const selectedText = textarea.value.substring(start, end);
        const transformed = transformAccentLine(selectedText);
        textarea.value = textarea.value.substring(0, start) + transformed + textarea.value.substring(end);
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
      });
      
      // 쉐도우 선 버튼 클릭 이벤트
      extraBtn2.addEventListener("click", () => {
        const textarea = container.querySelector("textarea");
        if (!textarea) return;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        if (start === end) return;
        const selectedText = textarea.value.substring(start, end);
        const transformed = transformShadowLine(selectedText);
        textarea.value = textarea.value.substring(0, start) + transformed + textarea.value.substring(end);
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
      });
      
      // 오버바 버튼 클릭 이벤트
      extraBtn3.addEventListener("click", () => {
        const textarea = container.querySelector("textarea");
        if (!textarea) return;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        if (start === end) return;
        const selectedText = textarea.value.substring(start, end);
        const transformed = transformOverbar(selectedText);
        textarea.value = textarea.value.substring(0, start) + transformed + textarea.value.substring(end);
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
      });
      
      // 틸드 버튼 클릭 이벤트
      extraBtn4.addEventListener("click", () => {
        const textarea = container.querySelector("textarea");
        if (!textarea) return;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        if (start === end) return;
        const selectedText = textarea.value.substring(start, end);
        const transformed = transformTilde(selectedText);
        textarea.value = textarea.value.substring(0, start) + transformed + textarea.value.substring(end);
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
      });
      
      // 리게이처 타이 버튼 클릭 이벤트
      extraBtn5.addEventListener("click", () => {
        const textarea = container.querySelector("textarea");
        if (!textarea) return;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        if (start === end) return;
        const selectedText = textarea.value.substring(start, end);
        const transformed = transformLigatureTie(selectedText);
        textarea.value = textarea.value.substring(0, start) + transformed + textarea.value.substring(end);
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
      });
      
      // 커넥터 버튼 클릭 이벤트
      extraBtn6.addEventListener("click", () => {
        const textarea = container.querySelector("textarea");
        if (!textarea) return;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        if (start === end) return;
        const selectedText = textarea.value.substring(start, end);
        const transformed = transformConnector(selectedText);
        textarea.value = textarea.value.substring(0, start) + transformed + textarea.value.substring(end);
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
      });
      
      // 작은 점 버튼 클릭 이벤트
      extraBtn7.addEventListener("click", () => {
        const textarea = container.querySelector("textarea");
        if (!textarea) return;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        if (start === end) return;
        const selectedText = textarea.value.substring(start, end);
        const transformed = transformDiacriticDot(selectedText);
        textarea.value = textarea.value.substring(0, start) + transformed + textarea.value.substring(end);
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
      });
      
      // 더블 오버레이 버튼 클릭 이벤트
      extraBtn8.addEventListener("click", () => {
        const textarea = container.querySelector("textarea");
        if (!textarea) return;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        if (start === end) return;
        const selectedText = textarea.value.substring(start, end);
        const transformed = transformDoubleOverlay(selectedText);
        textarea.value = textarea.value.substring(0, start) + transformed + textarea.value.substring(end);
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
      });
      
      // 스퀘어 인클로저 버튼 클릭 이벤트
      extraBtn9.addEventListener("click", () => {
        const textarea = container.querySelector("textarea");
        if (!textarea) return;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        if (start === end) return;
        const selectedText = textarea.value.substring(start, end);
        const transformed = transformSquareEnclosure(selectedText);
        textarea.value = textarea.value.substring(0, start) + transformed + textarea.value.substring(end);
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
      });
      
      // 서클 인클로저 버튼 클릭 이벤트
      extraBtn10.addEventListener("click", () => {
        const textarea = container.querySelector("textarea");
        if (!textarea) return;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        if (start === end) return;
        const selectedText = textarea.value.substring(start, end);
        const transformed = transformCircleEnclosure(selectedText);
        textarea.value = textarea.value.substring(0, start) + transformed + textarea.value.substring(end);
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
      });
  
      btnContainer.appendChild(underlineBtn);
      btnContainer.appendChild(strikethroughBtn);
      btnContainer.appendChild(overlineBtn);
      btnContainer.appendChild(additionalBtn);
      btnContainer.appendChild(extraBtn);
      btnContainer.appendChild(extraBtn2);
      btnContainer.appendChild(extraBtn3);
      btnContainer.appendChild(extraBtn4);
      btnContainer.appendChild(extraBtn5);
      btnContainer.appendChild(extraBtn6);
      btnContainer.appendChild(extraBtn7);
      btnContainer.appendChild(extraBtn8);
      btnContainer.appendChild(extraBtn9);
      btnContainer.appendChild(extraBtn10);
  
      // 자연스럽게 텍스트 영역 바로 아래에 버튼을 추가 (textarea 바로 뒤에 추가)
      const textarea = container.querySelector("textarea");
      if (textarea && textarea.parentNode) {
          textarea.parentNode.insertBefore(btnContainer, textarea.nextSibling);
      } else {
          container.parentNode.insertBefore(btnContainer, container.nextSibling);
      }
    }
  
    // 대상 컨테이너 감지 및 버튼 추가 (동적 생성된 컨테이너도 감지)
    function init() {
      const targets = document.querySelectorAll(
        "div.css-1uvivr9.e1h77j9v11, " +
        "div.css-ecigri.e1h77j9v12, " +
        "div.css-1cyfuwa.e1h77j9v12, " +
        "div.css-zd7mu6.eqncn6e2, " +
        "div.css-1rhv7vp.eqncn6e2, " +
        "div.css-tnkfhf.e1bdhxug2"
      );
      targets.forEach(target => {
        addButtons(target);
      });
    }
  
    document.addEventListener("DOMContentLoaded", init);
    const observer = new MutationObserver(init);
    observer.observe(document.body, { childList: true, subtree: true });
})();
