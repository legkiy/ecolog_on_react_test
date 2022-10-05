import React from 'react';
import ScriptButton from './ScriptButton';

function ScriptSlection({ setScriptIndex }) {
  // console.log(setScriptIndex)
  return (
    <div className="script-selection-box center-inside">
      <div className="center-inside">
        <h2 className="script-selection-title">
          Расположение энергетических ресурсов
        </h2>
        <ScriptButton
          scriptCase={'wood'}
          setScriptIndex={setScriptIndex}
          scriptDiscriptions={
            <div className="tippy-div">
              <p>
                Производителли древесного топлива по Иркутской области и
                республики Бурятия
              </p>
            </div>
          }
        />
        <ScriptButton
          scriptCase={'recyclePower'}
          setScriptIndex={setScriptIndex}
          scriptDiscriptions={
            <div>
              <p>Показатели потенциала возобновляемых источников энергии</p>
            </div>
          }
        />
      </div>
      <div className="horizontal-border"></div>
      <div className="center-inside">
        <h2 className="script-selection-title">Выбор сценария</h2>
        <ScriptButton
          scriptCase={'electra'}
          setScriptIndex={setScriptIndex}
          scriptDiscriptions={
            <div>
              <p>
                Использование электроэнергии на цели теплоснабжения; замещение
                всего угля в количестве 316,2 тыс. т и мазутной котельной (1,1
                тыс.т) - на электроэнергию, при этом существующие котельные на
                древесном и газовом топливе, как наиболее экологичные продолжают
                функционировать
              </p>
            </div>
          }
        />
        <ScriptButton
          scriptCase={'coal'}
          setScriptIndex={setScriptIndex}
          scriptDiscriptions={
            <div>
              <p>
                Предлагается в 31 котельной Слюдянского (9 котельных) и
                Кабанского (22 шт.) районов сжигать экологически более
                благоприятный бюородинский бурый уголь. При этом увеличится
                расход топлива с 26,3 до 28,4 тыс. т/год.
              </p>
            </div>
          }
        />
      </div>
      <div className="noSelect">
        <ScriptButton
          scriptCase={'noSelect'}
          setScriptIndex={setScriptIndex}
          scriptDiscriptions={'Отчистить выбор'}
        />
      </div>
    </div>
  );
}

export default ScriptSlection;
