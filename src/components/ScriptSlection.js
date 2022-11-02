import React from 'react';
import ScriptButton from './ScriptButton';

function ScriptSlection({ setScriptIndex }) {
  // console.log(setScriptIndex)
  return (
    <div className="script-selection-box center-inside">
      <div className="center-inside">
        <h2 className="script-selection-title">Энергетические ресурсы</h2>
        <ScriptButton
          scriptCase={'wood'}
          setScriptIndex={setScriptIndex}
          scriptDiscriptions={
            <div className="tippy-div">
              <p>Производители древесного топлива</p>
            </div>
          }
        />
        <ScriptButton
          scriptCase={'solar'}
          setScriptIndex={setScriptIndex}
          scriptDiscriptions={
            <div>
              <p>Показатели гелиопотенциала </p>
            </div>
          }
        />
        <ScriptButton
          scriptCase={'wind'}
          setScriptIndex={setScriptIndex}
          scriptDiscriptions={
            <div className="tooltip-box">
              <p>Показатели ветропотенциала</p>
            </div>
          }
        />
        <ScriptButton
          scriptCase={'termal'}
          setScriptIndex={setScriptIndex}
          scriptDiscriptions={
            <div className="tooltip-box">
              <p>Показатели геопотенциала</p>
            </div>
          }
        />
      </div>
      <div className="horizontal-border"></div>
      <div className="center-inside">
        <button
          className="no-select"
          onClick={() => setScriptIndex(0)}
          type="button"
        >
          Текущее состояние
        </button>
        <div className="horizontal-border"></div>
        <h2 className="script-selection-title">Cценарии</h2>
        <ScriptButton
          scriptCase={'coal'}
          setScriptIndex={setScriptIndex}
          scriptDiscriptions={
            <div>
              <p>
                Замещение черемховского угля в 31 котельной Слюдянского (9 шт.)
                и Кабанского (22 шт.) районов на экологически более
                благоприятный бурый уголь; <br />
                Увеличение расхода топлива с 26,3 до 28,4 тыс. т/год.
              </p>
            </div>
          }
        />
        <ScriptButton
          scriptCase={'electra'}
          setScriptIndex={setScriptIndex}
          scriptDiscriptions={
            <div>
              <p>
                Использование электроэнергии на цели теплоснабжения: <br />-
                замещение угля в количестве 316,2 тыс. т и мазута 1,1 тыс. т на
                электроэнергию;
                <br />- существующие котельные на древесном и газовом топливе
                продолжают функционировать. Суммарная потребность в
                электроэнергии 969 млн кВт·ч/год.
              </p>
            </div>
          }
        />
        <ScriptButton
          scriptCase={'gas'}
          setScriptIndex={setScriptIndex}
          scriptDiscriptions={
            <div>
              <p>
                - замещение угля в котельных на сжиженный и трубопроводный
                природный газ;
                <br />- существующие котельные на древесном топливе и
                электрокотельные продолжают функционировать. Суммарная
                потребность в природном газе 40 млн м3/год, в СПГ 55 тыс. т/год.
              </p>
            </div>
          }
        />
        <ScriptButton
          scriptCase={'renew'}
          setScriptIndex={setScriptIndex}
          scriptDiscriptions={
            <div>
              <p>
                - сооружение гибридных солнечно-дизельных комплексов в 3
                населенных пунктах;
                <br />- строительство малых ГЭС в 2 населенных пунктах;
                <br />- замена 6 угольных котельных на теплонасосные установки;
                <br />- замещение угля отходами деревообработки в 7 котельных и
                пеллетами в 1 котельной. Вытеснение дизельного топлива 93 т/год.
                Дополнительная потребность в электроэнергии 0,9 млн кВт·ч/год, в
                отходах деревообработки 3,6 тыс. т/год, в пеллетах - 0,4 тыс.
                т/год.
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default ScriptSlection;
