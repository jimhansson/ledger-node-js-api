/********************************************************************************
*   Ledger Node JS API
*   (c) 2016-2017 Ledger
*
*  Licensed under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License.
*  You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*  See the License for the specific language governing permissions and
*  limitations under the License.
********************************************************************************/

function runTest(comm, ledger, timeout) {

    return comm.create_async(timeout, true).then(function (comm) {
        var btc = new ledger.btc(comm);
        return btc.signMessageNew_async("44'/0'/0'/0", Buffer.from("test").toString('hex')).then(function (result) {
            var v = result['v'] + 27 + 4;
            var signature = Buffer.from(v.toString(16) + result['r'] + result['s'], 'hex').toString('base64');
            console.log("Signature : " + signature);
            comm.close_async()
        })
    })

}

module.exports = runTest;

