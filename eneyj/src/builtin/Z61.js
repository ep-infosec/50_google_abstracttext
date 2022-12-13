// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
'use strict'
// builtin: character_to_string

const i = require('./../index.js')
const c = i.constants
const u = i.utils
const globalEvaluate = i.evaluate

// TODO refactor
const getCharacterAsString = (context, argumentName) => {
  for (let ctx of context) {
    if (ctx.argument_name === argumentName) {
      let value = globalEvaluate(ctx.argument_value)
      if (value.Z1K1 !== c.CHARACTER) {
        return i.error(c.error.ARGUMENT_TYPE_MISMATCH, value)
      }
      return {
        Z1K1: c.STRING,
        Z6K1: value.Z60K1
      }
    }
  }
  return i.error(c.error.BUILTIN_COULD_NOT_FIND_CONTEXT_NAME, argumentName)
}

const builtin = context => {
  u.log('builtin:character_to_string', context)
  return getCharacterAsString(context, 'Z61K1')
}

exports.builtin = builtin
